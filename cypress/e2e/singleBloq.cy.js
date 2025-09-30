describe('SingleBloq Page', () => {
  beforeEach(() => {
    cy.visit('/bloq/:id');
  });

  it('should display the navbar and footer', () => {
    cy.get('nav').should('exist');
    cy.get('footer').should('exist');
  });

  it('should show the main heading', () => {
    cy.contains('How to make a Game look more attractive').should('exist');
    cy.contains('with New VR & AI Technology').should('exist');
  });

  it('should display the main image', () => {
    cy.get('img[alt="Gamer VR"]').should('exist');
  });

  it('should show the quote block', () => {
    cy.get('img[alt="Quote"]').should('exist');
    cy.contains('Pedro Domingos').should('exist');
  });

  it('should render the Popular Post section', () => {
    cy.contains('Popular Post').should('exist');
    cy.get('.grid').should('exist');
  });
});
