const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    specPattern: "automation/cypress/e2e/**/*.cy.js",
    supportFile: "automation/cypress/support/e2e.js",
    fixturesFolder: "automation/cypress/fixtures",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
