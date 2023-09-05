import landingPage from "../support/page_objects/landingPage"

Cypress.Commands.add('fillUpLandingPage', (value, email, firstName, LastName) => {
    landingPage.pick50dollar().click();
    landingPage.giftCardValue().invoke('text').should('equal', value)
    landingPage.emailInputField().invoke('attr', 'placeholder').should('eq', 'the receipt will be sent here ...')
    landingPage.emailInputField().type(email)
    landingPage.firstNameInputField().invoke('attr', 'placeholder').should('eq', 'first name ...')
    landingPage.firstNameInputField().type(firstName)
    landingPage.lastNameInputField().invoke('attr', 'placeholder').should('eq', 'last name ...')
    landingPage.lastNameInputField().type(LastName)
    landingPage.checkoutButton().click({force: true});
  })