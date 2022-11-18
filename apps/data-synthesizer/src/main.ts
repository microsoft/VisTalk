// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { parse } from 'yaml';
import { ParameterEntity, tokenize } from '@vis-talk/interpreter';
import { orderBy, uniq } from 'lodash';
import { EOL } from 'os';
import { resolve } from 'path';

interface Parameter {
  Name: string;
  EntityType: string;
  Templates: string[];
}

interface Template {
  Intents: string[];
  Templates: string[];
  Parameters: Parameter[];
}

const _colorNames = [
  'red',
  'green',
  'blue',
  'brown',
  'gray',
  'orange',
  'purple',
  'pink',
  'yellow',
  'white',
  'black',
  'cyan',
  'brown',
  'dark blue',
  'dark gray',
  'dark green',
  'light blue',
  'light green',
  '<color>',
];

const _chartNames = [
  'line chart',
  'scatter chart',
  'bar chart',
  'column chart',
  'area chart',
  'pie chart',
  'donut chart',
  'stacked column chart',
  'stacked bar chart',
  'stacked area chart',
  'clustered column chart',
  'clustered bar chart',
];

const _markNames = [
  'area',
  'bar',
  'circle',
  'line',
  'point',
  'rect',
  'rule',
  'square',
  'text',
  'tick',
  'people',
  'book',
  'man',
  'human',
  'woman',
  'car',
];

function getParam(replaceCandidates: string[], randIdx: number) {
  let paramValue = replaceCandidates[randIdx];
  if (paramValue === '<visual>') {
    paramValue = _chartNames[Math.floor(Math.random() * _chartNames.length)];
  }
  if (paramValue === '<color>') {
    paramValue = _colorNames[Math.floor(Math.random() * _colorNames.length)];
  }
  if (paramValue === '<mark>') {
    paramValue = _markNames[Math.floor(Math.random() * _markNames.length)];
  }
  return paramValue;
}


const dir = resolve(__dirname,
  '..', '..', '..', 'apps', 'data-synthesizer', 'src', 'assets');

const dataset = new Array<string>();
const tagNames = new Set<string>();
const intentNames = new Set<string>();
let countOfTemplates = 0;
for (const ent of readdirSync(dir)) {
  const file = resolve(dir, ent);
  const yaml = readFileSync(file).toString();
  const templates = parse(yaml) as Template[];
  for (const template of templates) {
    const paramDict = new Map<string, string[]>();
    const entities = new Set<string>();
    const intent = template.Intents.sort().join(',');
    intentNames.add(intent);

    let repeat = 1;
    if (template.Parameters) {
      for (const p of template.Parameters) {
        paramDict.set(p.Name, p.Templates);
        if (p.EntityType !== 'None') {
          entities.add(p.Name);
          if (p.Templates.includes('<color>')) {
            repeat += 3;
          }
          if (p.Templates.includes('<visual>')) {
            repeat += 2;
          }
          if (p.Templates.includes('<mark>')) {
            repeat += 2;
          }
        }
      }
    }
    for (const t of template.Templates) {

      countOfTemplates++;
      
      const tokens = tokenize(t);
      const counts = new Array<number>();
      const parameters = tokens
        .filter((x) => x.entity.type === 'parameter')
        .map((x) => x.entity) as ParameterEntity[];
      const candidates = parameters.map((x) => paramDict.get(x.name) ?? []);
      for (const candidate of candidates) {
        if (candidate.length === 0) {
          console.log('error');
          console.log(JSON.stringify(t, null, 4));
          throw 'error';
        }
        counts.push(candidate.length);
      }
      let n = 1;
      if (counts.length > 0) {
        n = counts.reduce((prev, current) => prev * current);
      }

      const maxPerTemplate = n > 100 ? 10 : (n > 20 ? 5 : 3);
      const dropout = n > maxPerTemplate ? maxPerTemplate / n : 1;
      for (let r = 0; r < repeat; r++) {
        for (let i = 0; i < n; i++) {
          if (Math.random() > dropout)
            continue;

          const input = new Array<string>();
          const tags = new Array<string>();
          let paramIdx = 0;
          let num = i;
          for (const token of tokens) {
            if (token.entity && token.entity.type === 'parameter') {
              const countCandidates = counts[paramIdx];
              paramIdx++;
              const idx = num % countCandidates;
              num = (num - idx) / countCandidates;
              const replaceCandidates = paramDict.get(token.entity.name) ?? [];
              const paramValue = getParam(replaceCandidates, idx);
              const paramValueTokens = tokenize(paramValue);
              for (let i = 0; i < paramValueTokens.length; i++) {
                input.push(paramValueTokens[i].term);
                const prefix = i === 0 ? 'B-' : 'I-';
                tags.push(
                  entities.has(token.entity.name)
                    ? prefix + token.entity.name
                    : 'O'
                );
              }
            } else {
              input.push(token.term);
              tags.push('O');
            }
          }
          for (const tag of tags) {
            tagNames.add(tag);
          }
          const line =
            'BOS ' +
            input.join(' ') +
            ' EOS\tO ' +
            tags.join(' ') +
            ' ' +
            intent;
          dataset.push(line);
        }
      }
      console.log(dataset.length);
    }
  }
}

console.log("original size " + dataset.length);
const uniq_dataset = uniq(dataset);
console.log("uniq size " + uniq_dataset.length);
const data_all = uniq_dataset;
const data_train = new Array<string>();
const data_test = new Array<string>();
for (let i = 0; i < uniq_dataset.length; i++) {
  if (i % 3 !== 0 || data_all[i].split(' ').length < 10) {
    data_train.push(data_all[i]);
  } else {
    data_test.push(data_all[i]);
  }
}

const tagNameSorted = orderBy(
  Array.from(tagNames).filter((x) => x !== 'O'),
  (x) => x
).map((x, i) => x + ' ' + (i + 3));
const intentNameSorted = orderBy(Array.from(intentNames), (x) => x).map(
  (x, i) => x + ' ' + (i + 1)
);

const savePath = resolve(__dirname,
  '..', '..', '..', 'libs', 'dataset', 'assets');

console.log('total templates: ' + countOfTemplates);
console.log('saved to ' + savePath);
writeFileSync(resolve(savePath, 'data_all.txt'), data_all.join(EOL) + EOL);
writeFileSync(resolve(savePath, 'data_train.txt'), data_train.join(EOL) + EOL);
writeFileSync(resolve(savePath, 'data_test.txt'), data_test.join(EOL) + EOL);
writeFileSync(resolve(savePath, 'tag_list.txt'),
  ['<PAD> 0', '<UNK> 1', 'O 2', ...tagNameSorted].join(EOL) + EOL
);
writeFileSync(resolve(savePath, 'intent_list.txt'),
  ['None 0', ...intentNameSorted].join(EOL) + EOL
);
