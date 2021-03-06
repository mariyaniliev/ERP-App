/// <reference types="cypress" />

describe("Login page", () => {
  describe("login section", () => {
    beforeEach(() => {
      cy.visitLoginPage();
    });

    it("should check if texts are correct", () => {
      cy.contains("Sign in to our platform")
        .parent()
        .then((parent) => {
          const paragraph = parent.find("p");
          const button = parent.find("button");
          expect(paragraph.eq(0).text()).to.equal("Sign in to our platform");
          expect(paragraph.eq(1).text()).to.equal("Your Email");
          expect(paragraph.eq(2).text()).to.equal("Your Password");
          expect(paragraph.eq(3).text()).to.equal("Remember me");
          expect(paragraph.eq(4).text()).to.equal("Forgot me?");
          expect(button.text()).to.equal("Sign in");
        });
    });
    it("should mark the checkbox", () => {
      cy.get("form")
        .find("input[name='rememberMe']")
        .click()
        .parent()
        .invoke("attr", "class")
        .should("contain", "Mui-checked");
    });
    it("should display error if we submit empty fields", () => {
      cy.get("form")
        .find("button")
        .click()
        .get("form")
        .find("p")
        .eq(2)
        .should("contain", "Invalid Email!");
    });

    it("should sign in and go to time offs page page", () => {
      cy.loginToApplication();
      cy.contains("Time Offs").should("be.visible");
      cy.url().should("contain", "team");
    });
  });
});
