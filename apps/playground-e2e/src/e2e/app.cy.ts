// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

describe('vis talk playground', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const runTest = (data: string, input: string[]) => {
    cy.get('.galleryItem').contains('Natural Language Input:');

    cy.contains('div', 'Create').click();
    cy.contains('Sample datasets').should('exist');

    cy.contains('Sample datasets').click();
    cy.contains(data).should('exist');
    cy.contains(data).click();
    cy.contains(data).should('not.exist');

    cy.contains('button', 'Load data').should('exist');
    cy.contains('button', 'Load data').click();
    cy.contains('Create Visualization').should('exist');
    cy.contains('Create Visualization').click();
    
    cy.contains('Loading').should('not.exist');
    cy.contains('Initializing').should('not.exist');

    cy.get('.monaco-editor textarea:first').should('exist');
    cy.get('.monaco-editor textarea:first').click().focused();

    cy.get('.monaco-editor textarea:first').type(
      input.map((x) => x + '{enter}').join('')
    );

    cy.get('.vega-embed').should('exist');
    // cy.screenshot();
    cy.get('.vega-embed').screenshot();
  };

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
    ['total sales by brand', 'set mark people'],
  ];

  it('car sales test cases', () => {
    const data = 'Car sales';
    cy.get('.galleryItem').contains('Natural Language Input:');
    cy.contains('div', 'Create').click();
    cy.contains('Sample datasets').should('exist');
    cy.contains('Sample datasets').click();
    cy.contains(data).should('exist');
    cy.contains(data).click();
    cy.contains(data).should('not.exist');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    // cy.wait(400);
    cy.contains('button', 'Load data').should('exist');
    cy.contains('button', 'Load data').click();
    cy.contains('Create Visualization').should('exist');
    cy.contains('Create Visualization').click();
    // cy.contains('NL Interpretations').should('exist').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    // cy.wait(5000);
    cy.contains('Loading').should('not.exist');
    cy.contains('Initializing').should('not.exist');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    // cy.wait(300);
    // .get('.fui-Spinner__Progressbar').should('not.exist');
    cy.get('.monaco-editor textarea:first').should('exist');
    cy.get('.monaco-editor textarea:first').click().focused();

    for (const input of testCases) {
      cy.get('.monaco-editor textarea:first')
        .type('{ctrl}a')
        .type(input.map((x) => x + '{enter}').join(''));

      // eslint-disable-next-line cypress/no-unnecessary-waiting
      // cy.wait(1000);
      cy.get('.vega-embed').should('exist');
      // cy.screenshot();
      cy.get('.vega-embed').screenshot();
    }
    // for (let i = 0; i < queries.length; i++) {
    //   const q = queries[i];
    //   if (q.DatasetId == 1) {
    //     cy.get('.monaco-editor textarea:first')
    //       .type('{ctrl}a')
    //       .type(q.PartitionKey + '{enter}');

    //     // eslint-disable-next-line cypress/no-unnecessary-waiting
    //     // cy.wait(1000);
    //     cy.get('.vega-embed').should('exist');
    //     cy.screenshot();
    //   }
    // }
  });

  it('should generate vega chart demo', () => {
    runTest('Product sales', [
      'sales by year as line chart',
      'add trend line in red',
      'change chart type to area chart',
      'set color to gray',
    ]);
  });

  it('add trend lines', () => {
    runTest('Stocks', [
      'close by date',
      'add linear regression from 2010 to 2016 in red',
      'emphasize the slope increase from 2016 to 2020 in green',
    ]);
  });
  it('trendline 1', () => {
    runTest('Shopping', ['total purchase by date', 'add trendline']);
  });

  it('trendline 2', () => {
    runTest('Shopping', [
      'total purchase by date',
      'make it thicker',
      'add trendline in red',
      'change color to gray',
    ]);
  });

  it('small multiple', () => {
    runTest('Shopping', [
      'total purchase by date',
      'repeat by category',
      'bind color to category',
      'resize height to 60',
    ]);
  });

  it('area chart', () => {
    runTest('Shopping', [
      'total purchase by date',
      'bind color to category',
      'set mark to area',
    ]);
  });

  // for (let i = 0; i < queries.length; i++) {
  //   const q = queries[i];
  //   if (q.DatasetId == 1) {
  //     it(q.PartitionKey, () => {
  //       runTest('Car sales', [q.PartitionKey]);
  //     });
  //   }
  // }
});
