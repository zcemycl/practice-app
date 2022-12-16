/// <reference types="cypress" />

describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/chatapp')
  })

  it('Confirm Form', () => {
    cy.get('input[id="user"]')
      .eq(0).type("Leo")

    cy.get('input[id="sendMsg"]')
      .eq(0).type("Hello")

    cy.get('button[data-testid="chatapp_button"]')
      .eq(0).click()
  })
})