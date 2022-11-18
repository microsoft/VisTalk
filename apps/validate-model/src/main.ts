import { readFileSync, writeFileSync } from 'fs';
import { getBackend } from '@tensorflow/tfjs-node';
import { getModel } from '@vis-talk/interpreter';
import { last } from 'lodash';
import { resolve } from 'path';
import { EOL } from 'os';

console.log(`Tensorflow Backend ${ getBackend() }`);
console.time('validate-model');
const files = ['data_all', 'data_train', 'data_test'];
const dir = resolve(__dirname, '..', '..', '..', 'libs', 'dataset', 'assets');
const logDir = __dirname;

for (const file of files) {
  const data_all = readFileSync(resolve(dir, `${file}.txt`)).toString();
  const test_cases = new Array<string[]>();
  const intents = new Set<string>();
  const lines = data_all.split(EOL);
  const groups = new Map<string, string[]>();
  const items = new Array<string>();
  const tokenIdArray = new Array<number[]>();
  const batch_size = 1024;
  const expectedArray = new Array<string>();
  const actualArray = new Array<string>();
  const model = getModel();
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const parts = line.split('\t');
    const input = parts[0].split(' ');
    const expected = parts[1];
    expectedArray.push(expected);
    const tokens = input.slice(1, input.length - 1);
    const tokenIds = tokens.map((x) => model.getWordId(x));
    tokenIdArray.push(tokenIds);

    if (tokenIdArray.length === batch_size || i === lines.length - 1) {
      const predsBatch = model.predict(tokenIdArray);
      for (const pred of predsBatch) {
        const { intents, tags } = pred;
        const predIntent = intents.join(',');
        const actual = 'O ' + tags.join(' ') + ' ' + predIntent;
        actualArray.push(actual);
      }
      tokenIdArray.length = 0;
    }
  }

  let correct = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const expected = expectedArray[i];
    const actual = actualArray[i];
    const intent = last(actual.split(' ')) ?? '';
    if (!intents.has(intent)) {
      intents.add(intent);
      const nl = line.split('\t')[0];
      test_cases.push([nl.substring(4, nl.length - 4), intent]);
    }
    if (actual === expected) {
      correct++;
    } else {
      let v = groups.get(intent);
      if (!v) {
        v = [];
      }
      v.push(line);
      v.push(' -- ' + actual);
      groups.set(intent, v);
      items.push(line)
      items.push("Expected: " + expected);
      items.push("Actual  : " + actual);
      items.push('---');
    }
  }
  console.log(
    'total ' +
      lines.length +
      ' corrects: ' +
      correct +
      ' % ' +
      correct / lines.length
  );
  writeFileSync(resolve(logDir, file + '_wrong.txt'), items.join(EOL) + EOL);
}
console.timeEnd('validate-model');
