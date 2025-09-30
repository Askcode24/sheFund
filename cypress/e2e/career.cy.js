describe('Career Page', () => {
  it('should display the career page content', () => {
    cy.visit('/career');
    cy.contains('Career Page Coming Soon').should('exist');
  });
});
