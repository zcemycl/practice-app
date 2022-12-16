/// <reference types="cypress" />

describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Bookmark', () => {
    cy.get('button[data-testid="navbar_Menu"]')
      .click()

    cy.fixture('../fixtures/bookmarks.json')
      .then((content) => {
        for (let i=0; i<content.hrefs.length; i++){
          cy.get(`a[href="${content.hrefs[i]}"]`)
            .contains(content.names[i])
        }
      })

    cy.get('body').trigger('keydown', { keyCode: 27})
      .wait(500)
      .get('body').trigger('keyup', { keyCode: 27});

  })

  it.skip('Github', () => {
    cy.get('a[data-testid="navbar_Git"]').eq(0)
      .invoke('removeAttr', 'target').click()

    cy.url()
      .should('include', 'zcemycl')
  })

  it('LinkedIn', () => {
    cy.get('a[data-testid="navbar_LinkedIn"]').eq(0)
      .invoke('removeAttr', 'target').click()
  })

  it('Home', () => {
    cy.get('button[data-testid="navbar_Menu"]')
      .click()
      .get('a[href="/practice-app/auth"]')
      .click().url()
      .should('include','/practice-app/auth')
    
    cy.get('a[href="/practice-app/"]').eq(0)
      .contains("Yui's")
      .click().url()
      .should('include','/practice-app/')
  })

})