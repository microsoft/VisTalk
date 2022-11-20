# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT license.

import numpy as np
import time
import os
import functools
import tensorflow as tf
import datetime
import tensorflow_addons as tfa
from seqeval.metrics import classification_report
from seqeval.metrics import f1_score

epochs = 120
batch_size = 32
params = {
    'num_layers': 2,
    'dim': 64,
    'ff_dim':  64,
    'n_heads': 2,
    'dropout': 0.15,
}

def to_dict(f):
    return dict([(x[0], int(x[1])) for x in [r.strip().split(' ') for r in open(f, "r").readlines()]])

dataset_path = os.path.abspath(os.path.join(os.getcwd(), '../../libs/dataset/assets')) + '/'
word2index = to_dict(dataset_path + "word_list.txt")
slot2index = to_dict(dataset_path + "tag_list.txt")
intent2index = to_dict(dataset_path + "intent_list.txt")
index2word = dict([(int(x[1]), x[0]) for x in [r.strip().split(' ') for r in open(dataset_path + "word_list.txt", "r").readlines()]])
index2slot = [r.strip().split(' ')[0] for r in open(dataset_path + "tag_list.txt", "r").readlines()]
max_len = 50
num_tags = len(slot2index)
num_words = 1 + max([int(x[1]) for x in [r.strip().split(' ') for r in 
    open(dataset_path + "word_list.txt", "r").readlines()]])
num_intents = len(intent2index)
vocab_size = num_words

def get_word_id(word):
    return word2index[word] if word in word2index else word2index["<UNK>"]

def get_tag_id(tag):
    return slot2index[tag] if tag in slot2index else slot2index["<UNK>"]

def generator_fn(text_file_name):
    with open(text_file_name, 'r',encoding='utf8') as data_file:
        data = data_file.readlines()
        data = [t[:-1] for t in data]
        data = [[t.split("\t")[0].split(" "), t.split("\t")[1].split(" ")[:-1], t.split("\t")[1].split(" ")[-1]] for t in data]
        for i in range(len(data)):
            t = data[i]
            words = t[0][1:-1]
            tags = t[1][1:]
            words = [get_word_id(x) for x in words]
            tags = [slot2index[x] for x in tags]
            intent_ix = intent2index[t[2]]
            yield (words), (tags, intent_ix)

shapes = (([None]), ([None], ()))
types = ((tf.int32), (tf.int32, tf.int32))

train_data = tf.data.Dataset.from_generator(
    functools.partial(generator_fn, dataset_path + 'data_train.txt'),
    output_shapes=shapes, output_types=types)

val_data = tf.data.Dataset.from_generator(
    functools.partial(generator_fn, dataset_path + 'data_test.txt'),
    output_shapes=shapes, output_types=types)

train_dataset = (
    train_data.map(lambda x, y: {'words': x, 'tags': y[0], 'intents': y[1]})
    .padded_batch(batch_size, padded_shapes={'words': [max_len], 'tags': [max_len], 'intents': ()})
)
val_dataset = (
    val_data.map(lambda x, y: {'words': x, 'tags': y[0], 'intents': y[1]})
    .padded_batch(batch_size, padded_shapes={'words': [max_len], 'tags': [max_len], 'intents': ()})
)


def scaled_dot_product_attention(q, k, v, mask):
  matmul_qk = tf.matmul(q, k, transpose_b=True)

  dk = tf.cast(tf.shape(k)[-1], tf.float32)
  scaled_attention_logits = matmul_qk / tf.math.sqrt(dk)

  if mask is not None:
    scaled_attention_logits += (mask * -1e9)

  attention_weights = tf.nn.softmax(scaled_attention_logits, axis=-1)
  output = tf.matmul(attention_weights, v)

  return output

class MultiHeadAttention(tf.keras.layers.Layer):
  def __init__(self, d_model, num_heads):
    super(MultiHeadAttention, self).__init__()
    self.num_heads = num_heads
    self.d_model = d_model

    assert d_model % self.num_heads == 0

    self.depth = d_model // self.num_heads

    self.wq = tf.keras.layers.Dense(d_model)
    self.wk = tf.keras.layers.Dense(d_model)
    self.wv = tf.keras.layers.Dense(d_model)

    self.dense = tf.keras.layers.Dense(d_model)

  def split_heads(self, x, batch_size):
    x = tf.reshape(x, (batch_size, -1, self.num_heads, self.depth))
    return tf.transpose(x, perm=[0, 2, 1, 3])

  def call(self, v, k, q, mask):
    batch_size = tf.shape(q)[0]

    q = self.wq(q)
    k = self.wk(k)
    v = self.wv(v)

    q = self.split_heads(q, batch_size)
    k = self.split_heads(k, batch_size)
    v = self.split_heads(v, batch_size)

    scaled_attention = scaled_dot_product_attention(q, k, v, mask)

    scaled_attention = tf.transpose(scaled_attention, perm=[0, 2, 1, 3])

    concat_attention = tf.reshape(scaled_attention,
                                  (batch_size, -1, self.d_model))

    output = self.dense(concat_attention)

    return output

class TransformerBlock(tf.keras.layers.Layer):
    def __init__(self, embed_dim, num_heads, ff_dim, rate=0.1):
        super(TransformerBlock, self).__init__()
        self.att = MultiHeadAttention(
            num_heads=num_heads, d_model=embed_dim
        )
        self.ffn = tf.keras.Sequential(
            [
                tf.keras.layers.Dense(ff_dim, activation="relu"),
                tf.keras.layers.Dense(embed_dim),
            ]
        )
        self.layernorm1 = tf.keras.layers.LayerNormalization(epsilon=1e-6)
        self.layernorm2 = tf.keras.layers.LayerNormalization(epsilon=1e-6)
        self.dropout1 = tf.keras.layers.Dropout(rate)
        self.dropout2 = tf.keras.layers.Dropout(rate)
        
    def call(self, inputs, mask, training=False):
        attn_output = self.att(inputs, inputs, inputs, mask)
        attn_output = self.dropout1(attn_output, training=training)
        out1 = self.layernorm1(inputs + attn_output)
        ffn_output = self.ffn(out1)
        ffn_output = self.dropout2(ffn_output, training=training)
        return self.layernorm2(out1 + ffn_output)

def create_padding_mask(seq):
  seq = tf.cast(tf.math.equal(seq, 0), tf.float32)
  return seq[:, tf.newaxis, tf.newaxis, :]

def get_angles(pos, i, d_model):
    angle_rates = 1 / np.power(10000, (2 * (i//2)) / np.float32(d_model))
    return pos * angle_rates

def positional_encoding(position, d_model):
    angle_rads = get_angles(np.arange(position)[:, np.newaxis],
                            np.arange(d_model)[np.newaxis, :],
                            d_model)
    angle_rads[:, 0::2] = np.sin(angle_rads[:, 0::2])
    angle_rads[:, 1::2] = np.cos(angle_rads[:, 1::2])
    pos_encoding = angle_rads[np.newaxis, ...]
    return tf.cast(pos_encoding, dtype=tf.float32)

class VisTalkModel(tf.keras.Model):
    def __init__(self, params):
        super(VisTalkModel, self).__init__(name='vistalk')

        self.dropout = params['dropout']
        self.embed_dim = params['dim']
        self.ff_dim = params['ff_dim']
        self.num_heads = params['n_heads']
        self.num_layers = params['num_layers']
        
        self.token_emb = tf.keras.layers.Embedding(input_dim=num_words, output_dim=self.embed_dim)
        self.pos_encoding = positional_encoding(max_len, self.embed_dim)
        self.transformer_blocks_0 = TransformerBlock(self.embed_dim, self.num_heads, self.ff_dim)
        self.transformer_blocks_1 = TransformerBlock(self.embed_dim, self.num_heads, self.ff_dim)
   
        self.dropout0 = tf.keras.layers.Dropout(self.dropout)
        self.dropout1 = tf.keras.layers.Dropout(self.dropout)
        self.dropout2 = tf.keras.layers.Dropout(self.dropout)
        self.gap1d = tf.keras.layers.GlobalAveragePooling1D()
        self.ff_final = tf.keras.layers.Dense(num_tags, name='tags')
        self.intent = tf.keras.layers.Dense(num_intents, activation=None)
        self.transition_params = tf.Variable(tf.random.uniform(shape=(num_tags, num_tags)), name="crf")

    def call(self, inputs, training=False):
        seq_len = tf.shape(inputs)[1]
        x = self.token_emb(inputs)

        # pos encoding
        x *= tf.math.sqrt(tf.cast(self.embed_dim, tf.float32))
        x += self.pos_encoding[:, :seq_len, :]
        x = self.dropout0(x, training=training)

        mask = create_padding_mask(inputs)
        x = self.transformer_blocks_0(x, mask, training=training)
        x = self.transformer_blocks_1(x, mask, training=training)

        x0 = x
        x = self.dropout1(x, training=training)
        tags_logits = self.ff_final(x)

        state = self.gap1d(x0)
        state = self.dropout2(state, training=training)
        intent = self.intent(state)
        return tags_logits, intent

model = VisTalkModel(params)
tags_loss_object = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True, reduction='none')
# model.compile(optimizer='adam',
#               loss=tags_loss_object,
#               metrics=['accuracy'])
def tags_loss_function(y_true, y_pred, loss_fn):
    loss = loss_fn(y_true, y_pred)
    mask = tf.cast((y_true > 0), dtype=tf.float32)
    loss = loss * mask
    return tf.reduce_sum(loss) / tf.reduce_sum(mask)

train_loss = tf.keras.metrics.Mean(name='train_loss', dtype=tf.float32)
test_loss = tf.keras.metrics.Mean(name='test_loss', dtype=tf.float32)
tags_acc = tf.keras.metrics.Mean(name='acc_tags', dtype=tf.float32)
tags_test_acc = tf.keras.metrics.Mean(name='test_acc_tags', dtype=tf.float32)
intent_acc = tf.keras.metrics.Accuracy(name='acc_intent', dtype=tf.float32)

def slot_accuracy_function(real, pred):
  accuracies = tf.equal(real, tf.argmax(pred, axis=2, output_type=tf.dtypes.int32))
  mask = tf.math.logical_not(tf.math.equal(real, 0))
  accuracies = tf.math.logical_and(mask, accuracies)
  accuracies = tf.cast(accuracies, dtype=tf.float32)
  mask = tf.cast(mask, dtype=tf.float32)
  accuracies = tf.reduce_sum(accuracies, 1)
  mask = tf.reduce_sum(mask, 1)
  return tf.reduce_sum(accuracies)/tf.reduce_sum(mask)

optimizer = tf.keras.optimizers.Adam(learning_rate=0.0001, epsilon=1e-9)

train_step_signature = [
     { "words": tf.TensorSpec(shape=[None, None], dtype=tf.int32, name="words"),
       "tags": tf.TensorSpec(shape=[None, None], dtype=tf.int32, name="tags"),
       "intents": tf.TensorSpec(shape=[None], dtype=tf.int32, name="intents"),
    } 
]

checkpoint_dir = './dist/model_training_checkpoints'
checkpoint_prefix = os.path.join(checkpoint_dir, "ckpt")
checkpoint = tf.train.Checkpoint(optimizer=optimizer,
                                 model=model)

ckpt_manager = tf.train.CheckpointManager(
    checkpoint, checkpoint_dir, max_to_keep=5)

if ckpt_manager.latest_checkpoint:
  checkpoint.restore(ckpt_manager.latest_checkpoint)

@tf.function(input_signature=train_step_signature)
def train_step(features):
    words = features['words']
    tags = features['tags']
    with tf.GradientTape() as tape:
        nwords = tf.math.reduce_sum(tf.cast(tf.math.not_equal(words, 0), dtype=tf.int32), axis=-1)
        tags_logits, intent_logits = model(words)
        log_likelihood, _ = tfa.text.crf_log_likelihood(tags_logits,
                                                        tags,
                                                        nwords,
                                                        model.transition_params)
        loss = tf.reduce_mean(-log_likelihood)
        
        mask = tf.math.logical_not(tf.math.equal(words, 0))
        loss_tags = tf.nn.sparse_softmax_cross_entropy_with_logits(labels=tags, logits=tags_logits)
        mask = tf.cast(mask, dtype=loss_tags.dtype)
        loss_tags *= mask
        #loss += tf.reduce_sum(loss_tags)/tf.reduce_sum(mask)
        true_intents = features['intents']
        loss += tf.nn.sparse_softmax_cross_entropy_with_logits(labels=true_intents, logits=intent_logits)

    grads = tape.gradient(loss, model.trainable_weights)
    optimizer.apply_gradients(zip(grads, model.trainable_weights))

    train_loss(loss)
    intent_acc(features['intents'], tf.argmax(intent_logits, -1))
    tags_acc(slot_accuracy_function(features['tags'], tags_logits))

@tf.function(input_signature=train_step_signature)
def test_step(features):
    words = features['words']
    tags = features['tags']
    true_intents = features['intents']
    nwords = tf.math.reduce_sum(tf.cast(tf.math.not_equal(words, 0), dtype=tf.int32), axis=-1)
    tags_logits, intent_logits = model(words)
    tags_test_acc(slot_accuracy_function(features['tags'], tags_logits))
    log_likelihood, _ = tfa.text.crf_log_likelihood(tags_logits,
                                                    tags,
                                                    nwords,
                                                    model.transition_params)
    loss = tf.reduce_mean(-log_likelihood)
    
    mask = tf.math.logical_not(tf.math.equal(words, 0))
    loss_tags = tf.nn.sparse_softmax_cross_entropy_with_logits(labels=tags, logits=tags_logits)
    mask = tf.cast(mask, dtype=loss_tags.dtype)
    loss_tags *= mask
    loss += tf.reduce_sum(loss_tags)/tf.reduce_sum(mask)
    loss += tf.nn.sparse_softmax_cross_entropy_with_logits(labels=true_intents, logits=intent_logits)
    test_loss(loss)

def calculate_metrics(dataset):
    true_s = []
    pred_s = []
    true_intents_a = []
    pred_intents_a = []
    intent_acc = []
    len = 0
    for y in dataset:
        pred_tags, pred_intents = model.predict(y['words'])
        true_tags = y['tags']
        true_intents = y['intents']
        predicted_tag_ids = np.argmax(pred_tags, axis=-1)
        predicted_intents = np.argmax(pred_intents, axis=-1)
        for true_tag_ids, pred_tag_ids, pred_intent, true_intent in zip(
                true_tags, 
                predicted_tag_ids,
                predicted_intents,
                true_intents):

            len = len + 1
            mask = (true_tag_ids > 0) & (pred_tag_ids > 0)
            true_tag_ids = true_tag_ids[mask]
            predicted_tag_ids = pred_tag_ids[mask]
            
            t = [index2slot[tag] for tag in true_tag_ids.numpy()]
            p = [index2slot[tag] for tag in predicted_tag_ids]

            true_s.append(t)
            pred_s.append(p)

            pred_intents_a.append(pred_intent)
            true_intents_a.append(true_intent)
            intent_acc.append(1 if true_intent == pred_intent else 0)

    # print(len)
    # print(classification_report(true_s, pred_s))
    intent = np.average(intent_acc)
    slot_f1 = f1_score(true_s, pred_s, average='micro')
    return slot_f1, intent

best_acc = 0
best_tag_f1_val = 0
best_intent = 0
best_total = 0
start = time.time()



current_time = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
train_log_dir = 'logs/gradient_tape/' + current_time + '/train'
test_log_dir = 'logs/gradient_tape/' + current_time + '/test'
train_summary_writer = tf.summary.create_file_writer(train_log_dir)
test_summary_writer = tf.summary.create_file_writer(test_log_dir)

for epoch in range(epochs):
    print(f'Epoch {epoch + 1}', flush=True)
    for (batch, input) in enumerate(train_dataset):
        train_step(input)

    # tag_f1_train, intent_train = calculate_metrics(train_dataset)
    # tag_f1_val, intent_val = calculate_metrics(val_dataset)
    with train_summary_writer.as_default():
        tf.summary.scalar('loss', train_loss.result(), step=epoch)
        tf.summary.scalar('accuracy', tags_acc.result(), step=epoch)
        # tf.summary.scalar('f1', tag_f1_train, step=epoch)
        # tf.summary.scalar('intent', intent_train, step=epoch)
        
    if epoch % 10 == 0:
        for (batch, input) in enumerate(val_dataset):
            test_step(input)

        tag_f1_val, intent_val = calculate_metrics(val_dataset)
        with test_summary_writer.as_default():
            tf.summary.scalar('loss', test_loss.result(), step=epoch)
            tf.summary.scalar('accuracy', tags_test_acc.result(), step=epoch)
            tf.summary.scalar('f1', tag_f1_val, step=epoch)
            tf.summary.scalar('intent', intent_val, step=epoch)

    print(f'Epoch {epoch + 1} train_loss {train_loss.result():.4f} test_loss {test_loss.result():.4f} train acc {tags_acc.result():.4f}  test acc {tags_test_acc.result():.4f}', flush=True)

    it_acc = intent_acc.result()
    if it_acc > best_intent:
        best_intent = it_acc

    acc = tags_acc.result()
    if acc > best_acc:
        best_acc = acc
        save = True

    if save:
        ckpt_save_path = ckpt_manager.save()
        print(f'Epoch {epoch + 1} Loss {train_loss.result():.4f} Acc_tags {tags_acc.result():.4f} intent_acc {intent_acc.result():.4f}', flush=True)
        print(f'Time used: {time.time() - start:.2f} secs\n')

    train_loss.reset_states()
    tags_acc.reset_states()
    intent_acc.reset_states()
    tags_test_acc.reset_states()
    test_loss.reset_states()

class ExportModel(tf.Module):
  def __init__(self, m):
    self.m = m

  @tf.function(input_signature=[tf.TensorSpec(shape=[None, None], dtype=tf.int32, name="words")])
  def __call__(self, words):
    (pred_tags, pred_intents) = self.m(words)
    predicted_tag_ids = tf.argmax(pred_tags, axis=-1, output_type=tf.dtypes.int32, name='tags')
    predicted_intents = tf.argmax(pred_intents, axis=-1, output_type=tf.dtypes.int32, name='intents')
    return predicted_tag_ids, predicted_intents

if ckpt_manager.latest_checkpoint:
  checkpoint.restore(ckpt_manager.latest_checkpoint)
  print('Latest checkpoint restored', flush=True)

  print(f'calculate_metrics')
  tag_f1_train, intent_train = calculate_metrics(train_dataset)
  tag_f1_val, intent_val = calculate_metrics(val_dataset)
  print(f'train f1 {tag_f1_train:.4f} intent {intent_train:.4f} / val f1 {tag_f1_val:.4f} intent {intent_val:.4f}')

  tf.saved_model.save(ExportModel(model), export_dir='./dist/saved_model')