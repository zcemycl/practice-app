/// <reference types="cypress" />

describe('visitor record dashboard page', () => {
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

  it('confirm format', () => {
    cy.get('h6[class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom"]')
      .contains('Visitor Statistics')

    cy.get('span[class="MuiButton-label"]')
      .contains('Add')
      .click()

    cy.get('div[role="combobox"]')
      .contains('IP')

    cy.get('div[role="combobox"]')
      .click()
      .type('188.214.14.65')

    cy.get('label[class="MuiFormControlLabel-root"]')
      .contains('customize')
      .click()

    cy.get('input[value="#6495ED"]').should('be.checked')
    cy.get('input[value="#20B2AA"]').click()
    cy.get('input[value="#20B2AA"]').should('be.checked')

    cy.get('span[class="MuiButton-label"]')
      .contains('Confirm')

    cy.get('span[class="MuiButton-label"]')
      .contains('Cancel')
      .click()

  })

  it('view visitor data', () => {
    cy.get('span[class="MuiButton-label"]')
      .contains('Add')
      .click()

    cy.get('div[role="combobox"]')
      .contains('IP')

    cy.get('div[role="combobox"]')
      .click()
      .type('188.214.14.65')

    cy.get('label[class="MuiFormControlLabel-root"]')
      .contains('customize')
      .click()

    cy.get('input[value="#6495ED"]').should('be.checked')
    cy.get('input[value="#20B2AA"]').click()
    cy.get('input[value="#20B2AA"]').should('be.checked')

    cy.get('span[class="MuiButton-label"]')
      .contains('Confirm').click()

    cy.get('span[class="MuiButton-label"]')
      .contains('188.214.14.65')
      .click().wait(5000)

    cy.get('span[class="MuiButton-label"]')
      .eq(1).children().eq(2)
      .click()
      .get('div[role="combobox"]')
      .click()
      .clear()
      .type('31.13.115.5')

    cy.get('span[class="MuiButton-label"]')
      .contains('Confirm')
      .click()

    cy.get('span[class="MuiButton-label"]')
      .contains('31.13.115.5')
      .click().wait(5000)

    cy.get('span[class="MuiButton-label"]')
      .eq(1).children().eq(0)
      .click().wait(5000)

  })
})