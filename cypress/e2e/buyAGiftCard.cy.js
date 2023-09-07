const constants = require ('../support/constans')
const landingPage = require('../support/page_objects/landingPage');
const summaryPage = require('../support/page_objects/summaryPage');
const checkoutPage = require('../support/page_objects/checkoutPage');
const successPage = require('../support/page_objects/successPage');

describe('End to end scenarios', () => {
    
    beforeEach(() => {
      cy.visit(constants.testWebstieURL);
    })

    it('Pay $50 for me', () => {
      cy.fillOutGiftCardDetailsForMe(
        constants.VALUE[50],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME
      );

      landingPage.checkoutButton().click({force: true});
      
      cy.checkingDataOnSummaryPage(
        constants.VALUE[50],
        constants.VALUE[50],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.MY_EMAIL
      );

      summaryPage.confirmDetailsButton().click();
      
      cy.fillIframePaymentSection(
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME,
        constants.PAYMENT_DATA.ZIP_CODE,
        constants.PAYMENT_DATA.CARD_NUMBER,
        constants.PAYMENT_DATA.EXPIRATION,
        constants.PAYMENT_DATA.CVC,
      );

      cy.getPaymentIframe().find(checkoutPage.submitButton).click();

      successPage.giftCardValue().should('have.text', constants.VALUE[50]);
      successPage.doneButton().click();

      cy.url().should('eq', constants.testWebstieURL);
    })

    it('Pay $100 for me', () => {
      cy.fillOutGiftCardDetailsForMe(
        constants.VALUE[100],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME
      );
      
      landingPage.checkoutButton().click({force: true});

      cy.checkingDataOnSummaryPage(
        constants.VALUE[100],
        constants.VALUE[100],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.MY_EMAIL
      );

      summaryPage.confirmDetailsButton().click();
      
      cy.fillIframePaymentSection(
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME,
        constants.PAYMENT_DATA.ZIP_CODE,
        constants.PAYMENT_DATA.CARD_NUMBER,
        constants.PAYMENT_DATA.EXPIRATION,
        constants.PAYMENT_DATA.CVC,
      );

      cy.getPaymentIframe().find(checkoutPage.submitButton).click();

      successPage.giftCardValue().should('have.text', constants.VALUE[100]);
      successPage.doneButton().click();

      cy.url().should('eq', constants.testWebstieURL);
    })

    it('Pay $150 for me', () => {
      cy.fillOutGiftCardDetailsForMe(
        constants.VALUE[150],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME
      );

      landingPage.checkoutButton().click({force: true});
      
      cy.checkingDataOnSummaryPage(
        constants.VALUE[150],
        constants.VALUE[150],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.MY_EMAIL
      );

      summaryPage.confirmDetailsButton().click();
      
      cy.fillIframePaymentSection(
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME,
        constants.PAYMENT_DATA.ZIP_CODE,
        constants.PAYMENT_DATA.CARD_NUMBER,
        constants.PAYMENT_DATA.EXPIRATION,
        constants.PAYMENT_DATA.CVC,
      );

      cy.getPaymentIframe().find(checkoutPage.submitButton).click();

      successPage.giftCardValue().should('have.text', constants.VALUE[150]);
      successPage.doneButton().click();

      cy.url().should('eq', constants.testWebstieURL);
    })

    it('Pay other amount for me - $222', () => {
      landingPage.optionOther().click()
      landingPage.otherAmountInput().type(222)
      
      cy.fillOutGiftCardDetailsForMe(
        constants.VALUE[222],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME
      );

      landingPage.checkoutButton().click({force: true});
      
      cy.checkingDataOnSummaryPage(
        constants.VALUE[222],
        constants.VALUE[222],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.MY_EMAIL
      );

      summaryPage.confirmDetailsButton().click();
      
      cy.fillIframePaymentSection(
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME,
        constants.PAYMENT_DATA.ZIP_CODE,
        constants.PAYMENT_DATA.CARD_NUMBER,
        constants.PAYMENT_DATA.EXPIRATION,
        constants.PAYMENT_DATA.CVC,
      )

      cy.getPaymentIframe().find(checkoutPage.submitButton).click();

      successPage.giftCardValue().should('have.text', constants.VALUE[222]);
      successPage.doneButton().click();

      cy.url().should('eq', constants.testWebstieURL);
    })

    it('Pay $50 for someone else', () => {
      cy.fillOutGiftCardDetailsForSomeoneElse(
        constants.VALUE[50],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME,
        constants.TESTUSER.SOMEONE_ELSE_EMAIL,
        constants.TESTUSER.MESSAGE_FOR_RECIPIENT
      );
      
      landingPage.checkoutButton().click({force: true});

      cy.checkingDataOnSummaryPage(
        constants.VALUE[50],
        constants.VALUE[50],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.SOMEONE_ELSE_EMAIL
      );

      summaryPage.confirmDetailsButton().click();
      
      cy.fillIframePaymentSection(
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME,
        constants.PAYMENT_DATA.ZIP_CODE,
        constants.PAYMENT_DATA.CARD_NUMBER,
        constants.PAYMENT_DATA.EXPIRATION,
        constants.PAYMENT_DATA.CVC,
      );

      cy.getPaymentIframe().find(checkoutPage.submitButton).click();

      successPage.giftCardValue().should('have.text', constants.VALUE[50]);
      successPage.doneButton().click();

      cy.url().should('eq', constants.testWebstieURL);
    })

    it('Pay $100 for someone else', () => {
      cy.fillOutGiftCardDetailsForSomeoneElse(
        constants.VALUE[100],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME,
        constants.TESTUSER.SOMEONE_ELSE_EMAIL,
        constants.TESTUSER.MESSAGE_FOR_RECIPIENT
      );
      
      landingPage.checkoutButton().click({force: true});

      cy.checkingDataOnSummaryPage(
        constants.VALUE[100],
        constants.VALUE[100],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.SOMEONE_ELSE_EMAIL
      );

      summaryPage.confirmDetailsButton().click();
      
      cy.fillIframePaymentSection(
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME,
        constants.PAYMENT_DATA.ZIP_CODE,
        constants.PAYMENT_DATA.CARD_NUMBER,
        constants.PAYMENT_DATA.EXPIRATION,
        constants.PAYMENT_DATA.CVC,
      );

      cy.getPaymentIframe().find(checkoutPage.submitButton).click();

      successPage.giftCardValue().should('have.text', constants.VALUE[100]);
      successPage.doneButton().click();

      cy.url().should('eq', constants.testWebstieURL);
    })

    it('Pay $150 for someone else', () => {
      cy.fillOutGiftCardDetailsForSomeoneElse(
        constants.VALUE[150],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME,
        constants.TESTUSER.SOMEONE_ELSE_EMAIL,
        constants.TESTUSER.MESSAGE_FOR_RECIPIENT
      );

      landingPage.checkoutButton().click({force: true});
      
      cy.checkingDataOnSummaryPage(
        constants.VALUE[150],
        constants.VALUE[150],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.SOMEONE_ELSE_EMAIL
      );

      summaryPage.confirmDetailsButton().click();
      
      cy.fillIframePaymentSection(
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME,
        constants.PAYMENT_DATA.ZIP_CODE,
        constants.PAYMENT_DATA.CARD_NUMBER,
        constants.PAYMENT_DATA.EXPIRATION,
        constants.PAYMENT_DATA.CVC,
      );

      cy.getPaymentIframe().find(checkoutPage.submitButton).click();

      successPage.giftCardValue().should('have.text', constants.VALUE[150]);
      successPage.doneButton().click();

      cy.url().should('eq', constants.testWebstieURL);
    })

    it('Pay other amount for someone else - $222', () => {
      landingPage.optionOther().click()
      landingPage.otherAmountInput().type(222)

      cy.fillOutGiftCardDetailsForSomeoneElse(
        constants.VALUE[222],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME,
        constants.TESTUSER.SOMEONE_ELSE_EMAIL,
        constants.TESTUSER.MESSAGE_FOR_RECIPIENT
      );
      
      landingPage.checkoutButton().click({force: true});

      cy.checkingDataOnSummaryPage(
        constants.VALUE[222],
        constants.VALUE[222],
        constants.TESTUSER.MY_EMAIL,
        constants.TESTUSER.SOMEONE_ELSE_EMAIL
      );

      summaryPage.confirmDetailsButton().click();
      
      cy.fillIframePaymentSection(
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME,
        constants.PAYMENT_DATA.ZIP_CODE,
        constants.PAYMENT_DATA.CARD_NUMBER,
        constants.PAYMENT_DATA.EXPIRATION,
        constants.PAYMENT_DATA.CVC,
      );

      cy.getPaymentIframe().find(checkoutPage.submitButton).click();

      successPage.giftCardValue().should('have.text', constants.VALUE[222]);
      successPage.doneButton().click();

      cy.url().should('eq', constants.testWebstieURL);
    })

    it('Check email sending is working', () => {
      cy.fillOutGiftCardDetailsForSomeoneElse(
        constants.VALUE[100],
        constants.emailAddress,
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME,
        constants.emailAddress,
        constants.TESTUSER.MESSAGE_FOR_RECIPIENT
      );
      
      landingPage.checkoutButton().click({force: true});

      cy.checkingDataOnSummaryPage(
        constants.VALUE[100],
        constants.VALUE[100],
        constants.emailAddress,
        constants.emailAddress
      );

      summaryPage.confirmDetailsButton().click();
      
      cy.fillIframePaymentSection(
        constants.TESTUSER.FIRST_NAME,
        constants.TESTUSER.LAST_NAME,
        constants.PAYMENT_DATA.ZIP_CODE,
        constants.PAYMENT_DATA.CARD_NUMBER,
        constants.PAYMENT_DATA.EXPIRATION,
        constants.PAYMENT_DATA.CVC,
      );

      cy.getPaymentIframe().find(checkoutPage.submitButton).click();

      successPage.giftCardValue().should('have.text', constants.VALUE[100]);
      successPage.doneButton().click();

      cy.mailosaurListMessages(constants.serverId).then((result) => {
        const senderMessage = result.items[0];
        const RecipientMessage = result.items[1];
      // Since I am using the same email address for both recipient the order of the emails sometimes different
      // I use this approach to avoid the fragileness of the test
      if (senderMessage == "Your Receipt for Arden Courts"){
        assert.equal("Your Receipt for Arden Courts", senderMessage.subject)
        assert.equal("You've been sent a $100.00 gift card for Demo US!", RecipientMessage.subject)
      } else {
        assert.equal("Your Receipt for Arden Courts", RecipientMessage.subject)
        assert.equal("You've been sent a $100.00 gift card for Demo US!", senderMessage.subject)
        }
      });

      cy.url().should('eq', constants.testWebstieURL);
      
    })
  
  }

)