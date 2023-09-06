class summaryPage{

    voucherValue() { return cy.get('#confirm-voucher-value') }
    totalCost() { return cy.get('#confirm-payment-amount') }
    purchaserEmail() { return cy.get('#confirm-purchaser-email') }
    recipientEmail() { return cy.get('#confirm-recipient-email') }    
    confirmDetailsButton() { return cy.get('[data-action="confirm#confirmAction"]') }
    
}

module.exports = new summaryPage()