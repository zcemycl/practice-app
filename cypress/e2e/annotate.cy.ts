/// <reference types="cypress" />

describe('annotate spec page', () => {
  beforeEach(() => {
    cy.visit('/visitrecords')
    cy.get('input[id="formBasicEmail"]').eq(0)
      .type('fake@email.com')

    cy.get('input[id="formBasicPassword"]').eq(0)
      .type('fake@email.com')

    cy.get('button[type="submit"]')
      .contains("Let's Go !")
      .click()
    
  })

  afterEach(() => {
    cy.get('button[data-tut="reactour__navbar_logout"]')
      .click()
  })

  it('passes', () => {
    cy.wait(500)
  })
})