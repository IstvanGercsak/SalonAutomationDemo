import landingPage from "../support/page_objects/landingPage"

Cypress.Commands.add('fillUpLandingPage', (value, email, firstName, LastName) => {
    landingPage.pick50dollar().click();
    landingPage.giftCardValue().invoke('text').should('equal', value)
    landingPage.emailInput().invoke('attr', 'placeholder').should('eq', 'the receipt will be sent here ...')
    landingPage.emailInput().type(email)
    landingPage.firstNameInput().invoke('attr', 'placeholder').should('eq', 'first name ...')
    landingPage.firstNameInput().type(firstName)
    landingPage.lastNameInput().invoke('attr', 'placeholder').should('eq', 'last name ...')
    landingPage.lastNameInput().type(LastName)
    landingPage.checkoutButton().click({force: true});
  })