class summaryPage{

    pick50dollar() { return cy.get('#option50') }
    giftCardValue() { return cy.get('#voucher-image-value') }
    emailInputField() { return cy.get('[data-target="email.purchaserEmailInput"]') }
    firstNameInputField() { return cy.get('[data-target="name.purchaserFirstNameInput"]') }
    lastNameInputField() { return cy.get('[data-target="name.purchaserLastNameInput"]') }
    checkoutButton() { return cy.get('[data-target="checkout.checkoutButton"]').first() }

}

module.exports = new summaryPage()