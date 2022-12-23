/// <reference types="cypress" />

describe('Profile page spec', () => {
  beforeEach(() => {
    cy.visit('/profile')
  })
  it('Not login', () => {
    cy.url().should('include','/practice-app/auth')
  })
})