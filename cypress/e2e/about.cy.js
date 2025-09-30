describe('About Page', () => {
  it('should display the about page content', () => {
    cy.visit('/about');
    cy.contains('This Page Is Not Available Yet').should('exist');
  });
});
