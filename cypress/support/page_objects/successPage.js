class successPage{

    giftCardValue() { return cy.xpath('/html/body/div[2]/div/div/div[1]/p[6]') }
    giftCardCode() { return cy.xpath('/html/body/div[2]/div/div/div[1]/p[4]') }
    doneButton() { return cy.get('[data-action="application#doneAction"]') }

}

module.exports = new successPage()