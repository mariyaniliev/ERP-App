/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// **************** LOGIN COMMANDS *****************
Cypress.Commands.add("visitLoginPage", () => {
  cy.visit("/login");
});

Cypress.Commands.add("loginToApplication", () => {
  cy.get('input[name="email"]').type("example@gmail.com");
  cy.get('input[name="password"]').type("yourpassword");
  cy.get("form").submit();
});

// **************** TIME OFFS COMMANDS *****************
Cypress.Commands.add("visitTimeOffsPage", () => {
  cy.visit("/team/timeoffs");
});

/* Cypress.Commands.add("authenticateMe", () => {
    const userCredentials = {
        email: "example@gmail.com",
        password: "yourpassword"
    }
    cy.request("POST", baseUrl + api.sessions.postSession, userCredentials).its("body").then(body => {
        cy.wrap(body.accessToken).as("token")
    })
}); */
