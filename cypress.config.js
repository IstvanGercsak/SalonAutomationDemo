const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  "defaultCommandTimeout": 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  env: {
      MAILOSAUR_API_KEY: "Lsi1QM6QBWyjjT4YjcN0PE6CXKfzj7TU",
    },
  },
});
