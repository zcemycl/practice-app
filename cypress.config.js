const { defineConfig } = require("cypress");

const CI = true
const localurl = 'http://localhost:3000/practice-app'
const url = 'https://zcemycl.github.io/practice-app'

module.exports = defineConfig({
  e2e: {
    baseUrl: CI?localurl:url,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
