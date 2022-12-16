describe('Knowledge graph page', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Clickables', () => {
    cy.get('canvas').then(($canvas) => {
      const cW = $canvas[1].width;
      const cH = $canvas[1].height;
      const cX = cW/2;
      const cY = cH/2;
      cy.wait(5000).wrap($canvas[1]).scrollIntoView()
        .dblclick(cX, cY)
      cy.wait(5000)
        .get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]')
        .contains('Back')
        .click()
    })
  })

  it('Tour', () => {
    cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary"]')
      .contains('Tour').click()
    cy.get('[role=dialog]')
      .should('have.length', 1)
    cy.knowGraph_tourConfirmTitle('Knowledge Graph', 'Knowledge Graph')
      .knowGraph_tourRightArrow()
      .knowGraph_tourConfirmTitle('Home', 'Home')
      .knowGraph_tourRightArrow()
      .knowGraph_tourConfirmTitle('Content', 'Demo Bookmarks')
      .knowGraph_tourRightArrow()
      .knowGraph_tourConfirmTitle('List of Demos','List of Demos')
      .knowGraph_tourRightArrow()
      .knowGraph_tourConfirmTitle('Github','Github')
      .knowGraph_tourRightArrow()
      .knowGraph_tourConfirmTitle('LinkedIn','LinkedIn')
      .get('button[data-tour-elem="right-arrow"]').eq(0)
      .should('be.disabled')

    cy.knowGraph_tourLeftArrow()
      .knowGraph_tourLeftArrow()
      .knowGraph_tourLeftArrow()
      .knowGraph_tourLeftArrow()
      .get('button[data-tour-elem="dot"]').eq(0).click()
      .get('button[data-tour-elem="left-arrow"]').eq(0)
      .should('be.disabled')

    cy.get('body').trigger('keydown', { keyCode: 27})
      .wait(500)
      .get('body').trigger('keyup', { keyCode: 27});

  })
})