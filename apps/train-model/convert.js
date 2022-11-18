// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

const fs = require('fs');
const os = require('os');

const bin = fs.readFileSync('./dist/web_model/group1-shard1of1.bin');
const model = fs.readFileSync('./dist/web_model/model.json').toString();
const tags = fs.readFileSync('../../libs/dataset/assets/tag_list.txt').toString();
const words = fs.readFileSync('../../libs/dataset/assets/word_list.txt').toString();
const intent_list = fs.readFileSync('../../libs/dataset/assets/intent_list.txt').toString();
const intents = JSON.stringify(
  intent_list.toString().split(os.EOL)
  .filter(x => x !== '').map(x => x.split(' ')[0]), null, 2);

const model_data = bin.toString('base64');
const wordDict = Object.fromEntries(words.split(os.EOL).map(x => x.split(' ')).filter(x => x.length === 2).map(x => [x[0], parseInt(x[1])]));
const tagNames = tags.split('\n').map(x => x.split(' ')[0]).filter(x => x !== '');
const source = [
  '// Copyright (c) Microsoft Corporation. All rights reserved.',
  '// Licensed under the MIT license.',
  '',
  "import { ModelConfig } from './contracts';",
  '',
  '/**',
  ' * Model config',
  ' */',
  `export const modelConfig: ModelConfig = {`,
  '  tags: ' + JSON.stringify(tagNames, null, 2) + ',',
  '  intents: ' + intents + ',',
  '  words: ' + JSON.stringify(wordDict, null, 2) + ',',
  `  model_graph: ${ JSON.stringify(JSON.parse(model), null, 2) },`,
  `  model_data: '${model_data}'`,
  '};'
].join(os.EOL);

fs.writeFileSync('../../libs/interpreter/src/lib/model-data.ts', source);