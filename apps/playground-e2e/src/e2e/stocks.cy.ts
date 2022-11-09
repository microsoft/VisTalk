// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { setupTest, testAndScreenshot } from '../support/app.po';

describe('tests cases on stocks dataset', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const testCases = [
    [
      'close by date',
    ],
    [
      'histogram of close'
    ],
    [
      'close by date',
      'add trend line from 2010 to 2016 in red',
      'emphasize the slope increase from 2016 to 2020 in green',
    ],
  ];

  it('Stocks test cases', () => {
    const data = 'Stocks';
    setupTest(data);

    for (const input of testCases) {
      testAndScreenshot(input);
    }
  });
});
