# Test automation framework for Phorest salon software demo

I built this test automation framework to demonstrate my knowledge and profession about how to build and set up a solid test automation framework from scratch using Cypress.

# Test architecture approach

* I created one test file where I wrote the test
* As most of the test are doing almost the same I create
* I followed the POM
* Page Object Model POM:
    * Page Object Model (POM) is a design pattern, popularly used in test automation that creates Object Repository for web UI elements. The advantage of the model is that it reduces code duplication and improves test maintenance
* Page object model (POM) design:
    * Separate elements in one place
        * In this way if we want to change or maintain element locations, it is easier to change at only one place

# Identified automated tests:

* Pay 50$ for me
* Pay 100$ for me
* Pay 150$ for me
* Pay other amount for me - $222
* Pay 50$ for someone else
* Pay 100$ for someone else
* Pay 150$ for someone else
* Pay other amount for someone else - $222
* Check email sending is working

# Found bugs

* When I click on the 'Other' amount and click back to a specific amount the 'Required' or the 'The minimum spend is €25 and the maximum spend is $1000.' message is still there
* First Name input field:
    * There is no length limitation
    * There is no 'required field' message
    * If I type too much character(200-300) the Checkout button will be inactive
* Last Name input filed:
    * There is no length limitation
    * There is no 'required field' message
    * If I type too much character(200-300) the Checkout button will be inactive
* At the payment step when I miss the CVC number I didn't get back required field message

# Used Technology

* Cypress
* JavaScript
* Visual Studio Code
* Github
* Circle CI - CI tool
* Additional modules installed:
    * cypress xpath: [link](https://www.npmjs.com/package/cypress-xpath?activeTab=readme)
    * mailosaur: [link](https://www.npmjs.com/package/mailosaur)