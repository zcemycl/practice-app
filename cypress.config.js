const { defineConfig } = require("cypress");

let isLocal = true
if (process.env.isLocal) {
  isLocal = process.env.isLocal==="true";
}
const localurl = 'http://localhost:3000/practice-app'
const url = 'https://zcemycl.github.io/practice-app/?'

module.exports = defineConfig({
  e2e: {
    baseUrl: isLocal?localurl:url,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
