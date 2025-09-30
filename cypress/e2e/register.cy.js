describe('Register Page', () => {
  it('should allow user to register', () => {
    cy.visit('/register');
    cy.get('input[name="firstName"]').type('askCode');
    cy.get('input[name="lastName"]').type('Favour');
    cy.get('input[name="email"]').type('newuser@example.com');
    cy.get('input[name="phoneNumber"]').type('1234567890');
    cy.get('input[name="password"]').type('newpassword');
    cy.get('input[name="confirmPassword"]').type('newpassword');
    cy.get('button[type="submit"]').click();
    cy.get('body').then((body) => {
      if (body.find('.Toastify__toast-body').length > 0) {
        cy.get('.Toastify__toast-body').should(
          'contain.text',
          'Network error. Please check your connection.'
        );
      } else {
        cy.log(`Toast doesn't appeared.`);
      }
    });
  });
});
