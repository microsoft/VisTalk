// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import type {
  io,
  GraphModel,
  Tensor,
  Rank
} from '@tensorflow/tfjs';
import { tensor2d } from '@tensorflow/tfjs';
import {
  loadGraphModelSync,
} from '@tensorflow/tfjs';
import type { ModelPrediction } from './contracts';
import { modelConfig } from './model-data';

const UNK = 1;
const MAX_TOKENS = 50;
const cache = new Map<string, ModelPrediction>();

/**
 * Wrap class for tensorflow graph model for inference.
 *
 * @export
 * @class PredictModel
 */
export class PredictModel {
  public readonly graphModel: GraphModel<io.IOHandlerSync>;
  private readonly wordToId: Map<string, number>;
  private readonly tagNames = new Array<string>();
  private readonly intents = new Array<string>();

  constructor() {
    this.wordToId = new Map(Object.entries(modelConfig.words));
    this.intents = modelConfig.intents;
    this.tagNames = modelConfig.tags;
    this.graphModel = this.load();
  }

  /**
   * Batch predict sequence of token ids.
   *
   * @param {Array<number[]>} listOfTokenIds a batch of sequence with token ids.
   * @return Predictions.
   * @memberof PredictModel
   */
  predict(listOfTokenIds: Array<number[]>): ModelPrediction[] {
    const preds = new Array<ModelPrediction>();
    const tokenIdsArray = new Array<number[]>();
    const tokenLensArray = new Array<number>();
    const keys = new Array<string>();
    const allTokenIds = new Array<number>();
    const pendingIds = new Array<number>();
    const max_len = MAX_TOKENS;
  
    for (let i = 0; i < listOfTokenIds.length; i++) {
      const tokenIds = listOfTokenIds[i];
      tokenIdsArray.push(tokenIds);
      tokenLensArray.push(tokenIds.length);
  
      const key = tokenIds.join(".");
      const pred: ModelPrediction = { tags: [], intents: [] };
      preds.push(pred);
      if (tokenIds.length === 0) {
        continue;
      }
  
      if (cache.has(key)) {
        const { intents, tags } = cache.get(key)!;
        pred.intents = intents;
        pred.tags = tags;
        continue;
      }
  
      keys.push(key);
      pendingIds.push(i);
      const pads = max_len - tokenIds.length;
      for (let i = 0; i < pads; i++) {
        tokenIds.push(0);
      }
      for (const id of tokenIds) {
        allTokenIds.push(id);
      }
    }
  
    if (pendingIds.length > 0) {
      const tensor = tensor2d(allTokenIds, [pendingIds.length, max_len], 'int32');
      const result = this.graphModel.execute(tensor) as Tensor<Rank>[];
      const predTags = Array.from(result[0].dataSync());
      const predIntentId = Array.from(result[1].dataSync());
      
      for (let i = 0; i < pendingIds.length; i++) {
        const id = pendingIds[i];
        const intents = new Array<string>();
        const tags = new Array<string>();
        for (let j = 0; j < tokenLensArray[id]; j++) {
          const tag = predTags[max_len * i + j];
          tags.push(this.tagNames[tag]);
        }
        const predIntent = this.intents[predIntentId[i]];
        for (const intent of predIntent.split(',')) {
          intents.push(intent);
        }
        cache.set(keys[i], { intents, tags });
        preds[id].intents = intents;
        preds[id].tags = tags;
      }
    }
  
    return preds;
  }
  
  /**
   * Get word vocab id.
   *
   * @param {string} word
   * @return {*}  {number}
   * @memberof PredictModel
   */
  public getWordId(word: string): number {
    const id = this.wordToId.get(word);
    return id !== undefined ? id : UNK;
  }

  private load(): GraphModel<io.IOHandlerSync> {
    const weightData = this.b64_decode(modelConfig.model_data);
    return loadGraphModelSync([modelConfig.model_graph, weightData]);
  }

  private b64_decode(str: string) {
    const len = Math.ceil(str.length / 4) * 3;
    const u8 = new Uint8Array(len);
    const byteString = atob(str);
  
    for (let i = 0; i < len; i += 1) {
      u8[i] = byteString.charCodeAt(i);
    }
  
    return u8.buffer;
  }
}

let impl : PredictModel | null = null;
/**
 * Get a singleton instance of PredictModel.
 *
 * @export
 * @return {*}  {PredictModel}
 */
export function getModel(): PredictModel {
  if (!impl) {
    impl = new PredictModel();
  }
  return impl;
}