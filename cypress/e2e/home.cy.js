describe('Home Page', () => {
  it('should display the home page and main content', () => {
    cy.visit('/');
    cy.contains('Home').should('exist');
  });
});
