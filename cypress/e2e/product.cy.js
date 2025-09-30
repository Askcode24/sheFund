describe('Product Page', () => {
  it('should display the product page content', () => {
    cy.visit('/product');
    cy.contains('Product').should('exist');
  });
});
