class landingPage{

    pick50dollar() { return cy.get('#option50') }
    giftCardValue() { return cy.get('#voucher-image-value') }
    emailInput() { return cy.get('[data-target="email.purchaserEmailInput"]') }
    firstNameInput() { return cy.get('[data-target="name.purchaserFirstNameInput"]') }
    lastNameInput() { return cy.get('[data-target="name.purchaserLastNameInput"]') }
    checkoutButton() { return cy.get('[data-target="checkout.checkoutButton"]').first() }
    recipientEmailInput() { return cy.get('[data-target="email.recipientEmailInput"]') }
    messageForRecipientInput() { return cy.get('[data-target="email.recipientMessageInput"]') }

}

module.exports = new landingPage()