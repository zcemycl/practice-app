/// <reference types="cypress" />

describe('3d page', () => {
  beforeEach(() => {
    cy.visit('/3d')
  })

  it('Camera', () => {
    cy.get('div[class="title"]').eq(0).click()

    cy.get('input[type="number"]').eq(0)
      .type('{selectall}')
      .type('20').trigger('change') // does not work well
      .type('{uparrow}').trigger('change')
      .type('{downarrow}').trigger('change')
      .type('{downarrow}').trigger('change')

    cy.get('input[type="number"]').eq(1)
      .type('{selectall}')
      .type('{uparrow}').trigger('change')
      .type('{downarrow}').trigger('change')

    cy.get('input[type="number"]').eq(2)
      .type('{selectall}')
      .type('{uparrow}').trigger('change')

    cy.get('input[type="number"]').eq(6)
      .type('{selectall}')
      .type('{uparrow}').trigger('change')
      .type('{downarrow}').trigger('change')
  })

  it('Cube', () => {
    cy.get('div[class="title"]').eq(1).click()
    cy.get('input[type="number"]').eq(7)
      .type('{uparrow}').trigger('change').wait(1500)
      .type('{uparrow}').trigger('change').wait(1500)
      .type('{uparrow}').trigger('change').wait(1500)
      .type('{uparrow}').trigger('change').wait(1500)

    cy.get('input[type="number"]').eq(8)
      .type('{uparrow}').trigger('change').wait(1500)
      .type('{uparrow}').trigger('change').wait(1500)
      .type('{uparrow}').trigger('change').wait(1500)
      .type('{uparrow}').trigger('change').wait(1500)

  })

})