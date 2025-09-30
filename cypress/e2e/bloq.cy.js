describe('Bloq Page', () => {
  it('should display the bloq page content', () => {
    cy.visit('/bloq/:id');
    cy.contains('Bloq').should('exist');
  });
});
