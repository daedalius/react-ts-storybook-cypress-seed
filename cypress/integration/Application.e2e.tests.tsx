describe('Application', () => {
  it('renders welcome message', () => {
    cy.visit('/');
    cy.get('button').contains('Cypress E2E will click me').click();
    cy.contains('Hello!').should('be.visible');
  });
});
