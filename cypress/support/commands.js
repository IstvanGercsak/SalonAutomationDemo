const constants = require ('../support/constans')
import landingPage from "../support/page_objects/landingPage"
import summaryPage from "../support/page_objects/summaryPage"
import checkoutPage from "../support/page_objects/checkoutPage"
import successPage from "../support/page_objects/successPage"

Cypress.Commands.add('fillOutGiftCardDetailsForMe', (value, email, firstName, LastName) => {
    
    switch(value) {
      case constants.VALUE[50]:
        landingPage.pick50dollar().click();
        break;
      case constants.VALUE[100]:
        landingPage.pick100dollar().click();
        break;
      case constants.VALUE[150]:
        landingPage.pick150dollar().click(); 
        break;
      default:
    }

    landingPage.giftCardValue().invoke('text').should('equal', value)
    landingPage.emailInput().invoke('attr', 'placeholder').should('eq', 'the receipt will be sent here ...')
    landingPage.emailInput().type(email)
    landingPage.firstNameInput().invoke('attr', 'placeholder').should('eq', 'first name ...')
    landingPage.firstNameInput().type(firstName)
    landingPage.lastNameInput().invoke('attr', 'placeholder').should('eq', 'last name ...')
    landingPage.lastNameInput().type(LastName)
  })

Cypress.Commands.add('fillOutGiftCardDetailsForSomeoneElse', (value, email, firstName, LastName, recipientEmail, messageForRecipient) => {
    
  switch(value) {
    case constants.VALUE[50]:
      landingPage.pick50dollar().click();
      break;
    case constants.VALUE[100]:
      landingPage.pick100dollar().click();
      break;
    case constants.VALUE[150]:
      landingPage.pick150dollar().click(); 
      break;
    default:
  }

    landingPage.sendToSomeoneElse().click()
    landingPage.giftCardValue().invoke('text').should('equal', value)
    landingPage.emailInput().invoke('attr', 'placeholder').should('eq', 'the receipt will be sent here ...')
    landingPage.emailInput().type(email)
    landingPage.firstNameInput().invoke('attr', 'placeholder').should('eq', 'first name ...')
    landingPage.firstNameInput().type(firstName)
    landingPage.lastNameInput().invoke('attr', 'placeholder').should('eq', 'last name ...')
    landingPage.lastNameInput().type(LastName)
    landingPage.recipientEmailInput().invoke('attr', 'placeholder').should('eq', 'gift card will be sent here ...')
    landingPage.recipientEmailInput().type(recipientEmail)
    landingPage.messageForRecipientInput().invoke('attr', 'placeholder').should('eq', 'type your message here eg. Hi Mom, Happy Birthday! Love Karen')
    landingPage.messageForRecipientInput().type(messageForRecipient)
  })

Cypress.Commands.add('fillIframePaymentSection', (firstName, lastName, zipCode, cardNumber, expiration, cvc) => {
    cy.wait(2000)
    cy.getPaymentIframe().find(checkoutPage.cardholderNameInput).type(firstName + ' ' + lastName)
    cy.getPaymentIframe().find(checkoutPage.zipCodeInput).type(zipCode)
    cy.getPaymentIframe().find(checkoutPage.cardNumberInput).type(cardNumber)
    cy.getPaymentIframe().find(checkoutPage.expirationDateInput).type(expiration)
    cy.getPaymentIframe().find(checkoutPage.securityCodeInput).type(cvc)
  })

Cypress.Commands.add('checkingDataOnSummaryPage', (voucherValue, totalCost, purchaserEmail, recipientEmail) => {
    summaryPage.voucherValue().should('contain', voucherValue)
    summaryPage.totalCost().should('contain', totalCost)
    summaryPage.purchaserEmail().should('contain', purchaserEmail)
    summaryPage.recipientEmail().should('contain', recipientEmail)
  })

Cypress.Commands.add('getPaymentIframe', () => {
    return cy.get(checkoutPage.paymentFormIframe).its('0.contentDocument.body').then(cy.wrap)
  })

Cypress.Commands.add('printGiftCardCodeInLog', () => {
  successPage.giftcardCode().invoke('text').then((text) => {
    cy.log("Gift card code: " + text)
  });
  })
  