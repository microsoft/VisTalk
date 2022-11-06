// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { normalize } from '../lib/normalize';

const tests = [
  ['brands', 'brand'],
  ['sales', 'sale'],
  ['categories', 'category'],
  ['os', 'os'],
];

describe('interpreter normalizer', () => {
  test.each(tests)('input %p normalized %p', (input, expected) => {
    const actual = normalize(input);
    expect(actual).toBe(expected);
  });
});
