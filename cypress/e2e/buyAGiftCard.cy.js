const constants = require ('../support/constans')

describe('End to end scenarios', () => {
    beforeEach(() => {
      cy.visit('https://gift-cards.phorest.com/salons/demous')
    })

    it.only('Pay 50$ for me', () => {
      cy.fillUpLandingPage(
        constants.VALUE[50],
        constants.TESTUSER.EMAIL,
        constants.TESTUSER.FIRSNAME,
        constants.TESTUSER.LASTNAME
      );
    })

    it('Pay 100$ for me', () => {
      cy.fillUpLandingPage(
        constants.VALUE[100],
        constants.TESTUSER.EMAIL,
        constants.TESTUSER.FIRSNAME,
        constants.TESTUSER.LASTNAME
      );
    })

    it('Pay 150$ for me', () => {
      cy.fillUpLandingPage(
        constants.VALUE[150],
        constants.TESTUSER.EMAIL,
        constants.TESTUSER.FIRSNAME,
        constants.TESTUSER.LASTNAME
      );
    })

    it('Pay othe amount for me', () => {
    })

    it('Pay 50$ for someone else', () => {
    })

    it('Pay 100$ for someone else', () => {
    })

    it('Pay 150$ for someone else', () => {
    })

    it('Pay othe amount for someone else', () => {
    })

    it('Check email sending is working', () => {
    })

    it('Check error messages', () => {
    })
  
  }

)