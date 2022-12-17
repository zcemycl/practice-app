/// <reference types="cypress" />

describe('Forget Password Page', () => {
  beforeEach(() => {
    cy.visit('/forgot')
  })
  it('submit fake email', () => {
    cy.get('input[id="formBasicEmail"]')
      .type("fake@email.com", {delay: 100})
    cy.get('button[type="submit"]')
      .contains("Let's Go !")
      .click()
    cy.get('div[role="alert"]')
      .contains('Domain not whitelisted by project')
  })
})