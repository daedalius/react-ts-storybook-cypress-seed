describe('Application', () => {
  it('renders welcome message', () => {
    cy.visit('/');
    cy.contains('Hello!').should('be.visible');
  });
});
