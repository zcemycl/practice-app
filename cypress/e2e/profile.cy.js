describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/profile')
  })
  it('Not login', () => {
    cy.url().should('include','/practice-app/auth')
  })
})