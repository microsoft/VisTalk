// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { setupTest, testAndScreenshot } from '../support/app.po';

describe('tests cases on product sales dataset', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const testCases = [
    ['total sales by year as line chart', 'add trend line'],
    [
      'average rating by product',
      'highlight clothing in darkgreen',
    ],
    ['total sales by year', 'bind color to category', 'set mark to area'],
    [
      'total sales by year as line chart',
      'repeat by category',
      'resize height 80',
    ],
  ];

  it('product sales test cases', () => {
    const data = 'Product sales';
    setupTest(data);

    for (const input of testCases) {
      testAndScreenshot(input);
    }
  });
});
