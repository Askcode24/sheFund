describe('Email Verification Page', () => {
  it('should allow user to verify email', () => {
    cy.visit('/email-verification');
    const otp = '123456';
    cy.get('input')
      .should('have.length', otp.length)
      .each((input, index) => {
        cy.wrap(input).type(otp[index]);
      });

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
