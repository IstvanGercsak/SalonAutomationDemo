class checkoutPage{

    paymentFormIframe = '#bancard-payment-form > iframe'
    cardholderNameInput = '#card-name'
    zipCodeInput = '#card-zip'
    cardNumberInput = '#card-number'
    expirationDateInput = '#card-expiry'
    securityCodeInput = '#card-security'
    submitButton = '#submitButton'

}

module.exports = new checkoutPage()