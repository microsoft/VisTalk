// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { setupTest, testAndScreenshot } from '../support/app.po';

describe('tests cases on car sales dataset', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const testCases = [
    ['sales'],
    ['total sales'],
    ['suv sales'],
    ['suv total sales'],
    ['bind x to sales'],
    ['bind y to sales'],
    ['brand'],
    ['bind x to brand'],
    ['bind y to brand'],
    ['number of brand'],
    ['bind y to number of brand'],
    ['total sales by brand and category as clustered column chart'],
    ['total sales by brand and category as clustered bar chart'],
    ['total sales by brand', 'hide grid'],
    ['total sales by category', 'remove suv, pickup'],
    ['total sales by brand', 'highlight suv in red'],
    [
      'total sales by category',
      'highlight fullsize in red',
      'add line 3M',
      'highlight branda in orange',
      'change color to darkcyan',
    ],
    [
      'total sales by brand',
      'make data point larger',
      'bind color to category',
    ],
    [
      'total sales by brand',
      'make data point smaller',
      'bind color to category',
    ],
    ['sum sales by category as column chart', 'sort desc'],
    ['sum sales by category as column chart', 'sort asc'],
    [
      'total sales by category',
      'change color to green',
      'highlight branda sales in darkgreen',
    ],
    [
      'total sales by category',
      'resize height to 80',
      'add a new chart total sales by brand',
      'highlight suv in orange',
    ],
    ['total sales by brand', 'resize height to 60', 'repeat by category'],
    ['total sales by category as donut chart'],
    ['total sales by category as pie chart'],
  ];

  it('car sales test cases', () => {
    const data = 'Car sales';
    setupTest(data);

    for (const input of testCases) {
      testAndScreenshot(input);
    }
  });
});
