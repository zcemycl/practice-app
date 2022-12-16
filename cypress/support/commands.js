// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('knowGraph_tourRightArrow', () => {
    return cy.get('button[data-tour-elem="right-arrow"]')
      .then(($btn) => {
        cy.wrap($btn[1]).click()
    })
})

Cypress.Commands.add('knowGraph_tourLeftArrow', () => {
    return cy.get('button[data-tour-elem="left-arrow"]')
      .then(($btn) => {
        cy.wrap($btn[1]).click()
    })
})

Cypress.Commands.add('knowGraph_tourConfirmTitle', (data_glitch, contain) => {
    return cy.get(`[data-glitch="${data_glitch}"]`).wrap()
        .contains(contain)
})
