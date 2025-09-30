describe('Contact Page', () => {
  it('should display the contact page content', () => {
    cy.visit('/contact');
    cy.get('input[name="name"]').type('Favour');
    cy.get('input[name="email"]').type('newuser@example.com');
    cy.get('input[name="phone"]').type('1234567890');
    cy.get('input[name="subject"]').type('Inquiry about banking');
    cy.get('textarea[name="message"]').type(
      'Hello, I would like to know more about your banking.'
    );
    cy.get('button[type="submit"]').click();
    cy.contains('Contact').should('exist');
  });
});
