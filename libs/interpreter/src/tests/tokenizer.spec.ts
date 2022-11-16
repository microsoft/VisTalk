// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { tokenize } from "../lib/tokenize";

const tests = [
  [
      "sales after oct 2022",
      "sales after <date>"
  ],
  [
      "add line at 100",
      "add line at <number>"
  ],
  [
      "change color to light blue",
      "change color to <color>"
  ]
];

describe('interpreter tokenize', () => {
  test.each(tests)('input %p tokens %p', (input, expectedTerms) => {
    const tokens = tokenize(input);
    const actualTerms = tokens.map(x => x.term).join(' ');
    expect(expectedTerms).toBe(actualTerms);
  });
});

describe('tokenize number date entity', () => {
  it('tokenize test date', () => {
    const tokens = tokenize('sales after oct 2022');
    expect(tokens[2]).toEqual({ type: 'date', text: 'oct 2022', tag: 'O', start: 12, length: 8, norm: 'oct 2022', term: '<date>',
      entity: { 'type': 'datetime', value: "2022-10-01T00:00:00"} });
  });

  it('tokenize test number', () => {
    const tokens = tokenize('sales greater than 10k');
    expect(tokens[3]).toEqual({ type: 'number', text: '10k', tag: 'O', start: 19, length: 3, norm: '10k', term: '<number>',
      entity: { 'type': 'number', value: 10000 } });
  });

});
