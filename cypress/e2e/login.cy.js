describe('Login Page', () => {
  it('should allow user to log in with valid credentials', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('admin@shefund.com');
    cy.get('input[name="password"]').type('askCode2007');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/');
    cy.contains('Home').should('be.visible');
  });

  it('should show error for invalid credentials', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('wrong@example.com');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();
    cy.contains('Login failed').should('be.visible');
  });
});
