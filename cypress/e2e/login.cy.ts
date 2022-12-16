/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('log in fake email and log out', () => {
    cy.get('input[id="formBasicEmail"]').eq(0)
      .type('fake@email.com', {delay: 50})

    cy.get('input[id="formBasicPassword"]').eq(0)
      .type('fake@email.com', {delay: 50})

    cy.get('button[type="submit"]')
      .contains("Let's Go !")
      .click()

    cy.get('button[data-tut="reactour__navbar_logout"]')
      .click()
  })

  it('sign up link', () => {
    cy.get('a[href="/practice-app/signup"]')
      .click()
      .url().should('include', '/practice-app/signup')
  })

  it('forget pwd link', () => {
    cy.get('a[href="/practice-app/forgot"]')
      .click()
      .url().should('include', '/practice-app/forgot')
  })

})