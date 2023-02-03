const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    // baseUrl: "https://kasir-api.belajarqa.com",
    specPattern: "cypress/support/e2e",
    supportFile: false
  },
  env: {
    username: "test123",
    password: "12345"
  }
});
