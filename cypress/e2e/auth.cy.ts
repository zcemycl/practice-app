/// <reference types="cypress" />

describe('Authentication page', () => {
  beforeEach(() => {
    cy.visit('/auth')
  })

  it('Enter Login', () => {
    cy.get('[data-testid="loginForm_User"]').eq(0)
      .contains("Username")
    cy.get('[data-testid="loginForm_User"]').eq(0)
      .type('IamLeo')
    
    cy.get('[data-testid="loginForm_Pwd"]').eq(0)
      .contains("Password")
    cy.get('[data-testid="loginForm_Pwd"]').eq(0)
      .type('IamLeo')

    cy.get('button[aria-label="toggle password visibility"]')
      .click().click()
    cy.get('a[href="/practice-app/profile"]')
      .click().url()
      .should('include','/practice-app/profile')
  })
})