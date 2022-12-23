/// <reference types="cypress" />

describe('signup spec', () => {
  beforeEach(() => {
    cy.visit('/signup')
  })
  it('Register fake email rejected by existing', () => {
    cy.get('input[id="formBasicEmail"]')
      .type("fake@email.com", {delay: 50})
    cy.get('input[id="formBasicPassword"]')
      .type("fake@email.com", {delay: 50})
    cy.get('input[id="formBasicConfirmPassword"]')
      .type("fake@email.com", {delay: 50})

    cy.get('button[type="submit"]').click()    
      .get('div[role="alert"]')
      .contains('Error (auth/email-already-in-use).')
  })
})