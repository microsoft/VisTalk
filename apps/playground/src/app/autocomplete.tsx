// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { VegaBuilder } from '@vis-talk/vega-builder';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export const firstWords = [
  'total',
  'sum',
  'average',
  'sum of',
  'average of',
  'number of',
  'mean',
  'mean of',
  'min of',
  'max of',
  'highlight',
  'swap axis',
  'change',
];

export const completeAggrs = [
  'total',
  'sum',
  'average',
  'sum of',
  'average of',
  'number of',
  'mean',
  'mean of',
  'min of',
  'max of',
];

export const completeAsChartWords = [
  'bar chart',
  'column chart',
  'pie chart',
  'line chart',
];

export const completeColorWords = [
  'red',
  'green',
  'darkcyan',
  'purple',
  'brown',
];

export function autocomplete(
  model: monaco.editor.ITextModel,
  position: monaco.Position,
  session: VegaBuilder
) {
  const word = model.getWordAtPosition(position);
  const suggestions = [];
  const fullRange = model.getFullModelRange();
  const lineEnd = model.getLineMaxColumn(position.lineNumber);
  const currentLine = model.getLineContent(position.lineNumber);

  const range = {
    startColumn: position.column - 1,
    endColumn: position.column - 1,
    startLineNumber: position.lineNumber,
    endLineNumber: position.lineNumber,
  };
  if (word) {
    // first word
    if (word.word === currentLine) {
      // suggest measure name and common
      for (const col of session.columns) {
        const name = col.name.toLowerCase();
        if (
          name.length > word.word.length &&
          name.startsWith(word.word) &&
          col.defaultAggregate
        ) {
          suggestions.push({
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: name,
            label: name,
            range,
          });
        }
      }
      for (const w of firstWords) {
        if (w.startsWith(word.word)) {
          suggestions.push({
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: w,
            label: w,
            range,
          });
        }
      }
    } else if (currentLine.endsWith('as ' + word.word)) {
      for (const w of completeAsChartWords) {
        if (w.toLowerCase().startsWith(word.word.toLowerCase())) {
          suggestions.push({
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: w,
            label: w,
            range,
          });
        }
      }
    } else if (currentLine.endsWith('color ' + word.word)) {
      for (const w of completeColorWords) {
        if (w.toLowerCase().startsWith(word.word.toLowerCase())) {
          suggestions.push({
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: w,
            label: w,
            range,
          });
        }
      }
    }
  } else {
    if (completeAggrs.filter((x) => currentLine.endsWith(x + ' ')).length > 0) {
      for (const col of session.columns) {
        if (col.defaultAggregate) {
          suggestions.push({
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: ' ' + col.name.toLowerCase(),
            label: ' ' + col.name.toLowerCase(),
            range,
          });
        }
      }
    }
    if (currentLine.endsWith(' by ')) {
      for (const col of session.columns) {
        if (col.defaultAggregate && col.name.length) {
          suggestions.push({
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: ' ' + col.name.toLowerCase(),
            label: ' ' + col.name.toLowerCase(),
            range,
          });
        }
      }
    }
    if (currentLine.endsWith(' as ')) {
      for (const chart of completeAsChartWords) {
        suggestions.push({
          kind: monaco.languages.CompletionItemKind.Text,
          insertText: ' ' + chart,
          label: ' ' + chart,
          range,
        });
      }
    }
  }
  return {
    incomplete: false,
    suggestions,
  } as monaco.languages.CompletionList;
}

export function autocompleteInline(
  model: monaco.editor.ITextModel,
  position: monaco.Position,
  context: monaco.languages.InlineCompletionContext,
  session: VegaBuilder
): monaco.languages.InlineCompletions {
  const items = [];
  const word = model.getWordAtPosition(position);
  const currentLine = model.getLineContent(position.lineNumber);
  const lines = model.getLinesContent();
  const generator = session.state;

  if (currentLine.length < 2 && lines.length === 1) {
    for (const text of session.autocompletes()) {
      if (text.startsWith(currentLine)) {
        items.push({
          inlineText: text,
          text,
        });
      }
    }
  }
  if (generator && currentLine === '') {
    // if (generator.implictAggregation && lines.length === 2 && lines[1] === '') {
    //   items.push({
    //     inlineText: 'change to sum',
    //     text: 'change to sum',
    //   });
    // }
    if (generator.isTimeSeries && lines.length === 2) {
      items.push({
        inlineText: 'add trend line in red',
        text: 'add trend line in red',
      });
    }
    // if (generator.canSuggestSort) {
    //   items.push({
    //     inlineText: 'sort by y ascending',
    //     text: 'sort by y ascending',
    //   });
    // }
  }
  if (word) {
    if (word.word === 'add') {
      items.push({
        inlineText: 'add trend line in red',
        text: 'add trend line in red',
      });
    }
    if (word.word === 'sort') {
      items.push({
        inlineText: 'sort descending',
        text: 'sort descending',
      });
    }
    if (currentLine === 'add trend line') {
      items.push({
        inlineText: 'add trend line in orange',
        text: 'add trend line in orange',
      });
    }
    const changeChartType = 'change chart type to area chart';
    if (
      changeChartType.startsWith(currentLine) &&
      generator &&
      generator.isTimeSeries
    ) {
      items.push({
        inlineText: changeChartType,
        text: changeChartType,
      });
    }
    if (currentLine === 'set') {
      items.push({
        inlineText: 'set color to gray',
        text: 'set color to gray',
      });
    }
    // first word
    if (word.word === currentLine) {
      // suggest measure name and common
      for (const col of session.columns) {
        const name = col.name.toLowerCase();
        if (
          name.length > word.word.length &&
          name.startsWith(word.word) &&
          col.defaultAggregate
        ) {
          items.push({
            insertText: name,
            text: name,
            // range,
          });
        }
      }
      for (const w of firstWords) {
        if (w.startsWith(word.word)) {
          items.push({
            insertText: w,
            text: w,
            // range,
          });
        }
      }
    } else if (currentLine.endsWith('as ' + word.word)) {
      for (const w of completeAsChartWords) {
        if (w.toLowerCase().startsWith(word.word.toLowerCase())) {
          items.push({
            insertText: w,
            text: w,
            // range,
          });
        }
      }
    } else if (currentLine.endsWith('color ' + word.word)) {
      for (const w of completeColorWords) {
        if (w.toLowerCase().startsWith(word.word.toLowerCase())) {
          items.push({
            insertText: w,
            text: w,
            // range,
          });
        }
      }
    }
  } else {
    if (completeAggrs.filter((x) => currentLine.endsWith(x + ' ')).length > 0) {
      for (const col of session.columns) {
        if (col.defaultAggregate) {
          items.push({
            insertText: col.name.toLowerCase(),
            text: col.name.toLowerCase(),
            //  range,
          });
        }
      }
    }
    if (currentLine.endsWith(' by ')) {
      for (const col of session.columns) {
        if (col.dataType !== 'datetime' && col.defaultAggregate === undefined) {
          items.push({
            insertText: col.name.toLowerCase(),
            text: col.name.toLowerCase(),
          });
        }
      }
    }
    if (currentLine.endsWith(' as ')) {
      for (const chart of completeAsChartWords) {
        items.push({
          insertText: chart,
          text: chart,
          //  range,
        });
      }
    }
  }
  return {
    items,
  } as monaco.languages.InlineCompletions;
}
