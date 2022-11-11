// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { setupTest, testAndScreenshot } from '../support/app.po';

describe('test sorts', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const testCases = [
    `total sales by model
    sort sales`,
    
      `total sales by model
    sort by sales desc`,
    
    `total sales by model
    sort by sales asc`,
    
    `total sales by model
    sort by model desc`,
    
    `total sales by model
    sort by model asc`,
    
    `total sales by model
    sort desc`,
    
    `total sales by model
    sort asc`,
    
    `total sales by model
    sort`,
    
    `total sales by model
    sort by sales`,
    
    `total sales by model
    sort by model`,
    
    
    `total sales by category, model
    sort by sales desc`,
    
    `total sales by category, model
    sort by sales asc`,
    
    `total sales by category, model
    sort by category desc`,
    
    `total sales by category, model
    sort by category asc`,
    
    `total sales by category, model
    sort desc`,
    
    `total sales by category, model
    sort asc`,
    
    `total sales by category, model
    sort`,
    
    `total sales by category, model
    sort by sales`,
    
    `total sales by category, model
    sort by category`,


    `total sales by model as bar chart
    sort by sales desc`,
    
    `total sales by model as bar chart
    sort by sales asc`,
    
    `total sales by model as bar chart
    sort by model desc`,
    
    `total sales by model as bar chart
    sort by model asc`,
    
    `total sales by model as bar chart
    sort desc`,
    
    `total sales by model as bar chart
    sort asc`,
    
    `total sales by model as bar chart
    sort`,
    
    `total sales by model as bar chart
    sort by sales`,
    
    `total sales by model as bar chart
    sort by model`,
  ];

  it('car sales test cases', () => {
    const data = 'Car sales';
    setupTest(data);

    for (const input of testCases) {
      testAndScreenshot(input.split('\r\n').map(x => x.trim()));
    }
  });
});
