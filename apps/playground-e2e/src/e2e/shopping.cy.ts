// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { setupTest, testAndScreenshot } from '../support/app.po';

describe('tests cases on shopping dataset', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const testCases = [
    ['total purchase by category as donut chart'],
    ['total purchase by category as pie chart'],
    [
      'total purchase by date',
      'make it thicker',
      'add trendline in red',
      'change color to gray',
    ],
    [
      'total purchase by date',
      'repeat by category',
      'bind color to category',
      'resize height to 60',
    ],
    ['total purchase by date', 'bind color to category', 'set mark to area'],
  ];

  it('Shopping test cases', () => {
    const data = 'Shopping';
    setupTest(data);

    for (const input of testCases) {
      testAndScreenshot(input);
    }
  });
});
