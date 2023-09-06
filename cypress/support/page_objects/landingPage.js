class landingPage{

    pick50dollar() { return cy.get('#option50') }
    pick100dollar() { return cy.get('#option100') }
    pick150dollar() { return cy.get('#option150') }
    optionOther() { return cy.get('#optionOther') }
    otherAmountInput() { return cy.get('[data-target="amount.otherInput"]') }
    giftCardValue() { return cy.get('#voucher-image-value') }
    emailInput() { return cy.get('[data-target="email.purchaserEmailInput"]') }
    firstNameInput() { return cy.get('[data-target="name.purchaserFirstNameInput"]') }
    lastNameInput() { return cy.get('[data-target="name.purchaserLastNameInput"]') }
    checkoutButton() { return cy.get('[data-target="checkout.checkoutButton"]').first() }
    recipientEmailInput() { return cy.get('[data-target="email.recipientEmailInput"]') }
    messageForRecipientInput() { return cy.get('[data-target="email.recipientMessageInput"]') }
    sendToSomeoneElse() { return cy.get('[data-target="tabs.sendToOtherTab"]') }

}

module.exports = new landingPage()