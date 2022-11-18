export const getGreeting = () => cy.get('h1');

export function setupTest(data: string) {
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

  cy.get(`[aria-label="Hide details"]`).click();
  cy.get(`[aria-label="Show details"]`).should('exist');

  cy.get('.monaco-editor textarea:first').should('exist');
  cy.get('.monaco-editor textarea:first').click().focused();
}

export function testAndScreenshot(input: string[]) {
  cy.get('.monaco-editor textarea:first')
    .type('{ctrl}a')
    .type(input.map((x) => x + '{enter}').join(''));

  cy.get('.vega-embed').should('exist');

  // cy.screenshot();
  cy.get('.vega-embed').screenshot(input.join(', ').replace(/[^a-zA-Z0-9]/g, '_'));
}
