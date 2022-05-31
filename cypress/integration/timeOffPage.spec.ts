/// <reference types="cypress" />

import { navigateTo } from "../support/page_objects/naviagtion";

const SELECTED_START_DATE_INDEX = 0;
const SELECTED_END_DATE_INDEX = 8;

describe("timeOff page", () => {
  describe("timeOff section", () => {
    before(() => {
      navigateTo.timeOffsPage();
    });

    it("should check if correct data is displayed", () => {
      cy.get("[aria-rowindex='2']").eq(0).should("contain", "Ivan Kraev");
    });

    it("should open time offs modal", () => {
      cy.contains("Request time off").click();
      cy.get(".css-1ed8rzx-MuiStack-root").should("contain", "Full Name");
    });

    it("should select the time off type", () => {
      cy.wait(200);
      cy.get("[data-testid='ArrowDropDownIcon']").eq(3).parent().click();
      cy.contains("Sick leave").click({ force: true });
      cy.get(".MuiOutlinedInput-input").should("contain", "Sick leave");
    });

    it("should check selecting date is correct", () => {
      cy.intercept("POST", "**/timeoffs/calculate*", {
        count: SELECTED_END_DATE_INDEX - SELECTED_START_DATE_INDEX,
      }).as("CalculateDays");
      cy.wait(200);
      cy.get(".rdrDay")
        .not(".rdrDayDisabled")
        .not(".rdrDayPassive")
        .then((days) => {
          const startDay = days.eq(SELECTED_START_DATE_INDEX);
          const endDay = days.eq(SELECTED_END_DATE_INDEX);
          cy.wrap(startDay).click();
          cy.wrap(endDay).click();
          cy.get(
            "[class='MuiTypography-root MuiTypography-body1 css-1r70zep-MuiTypography-root']"
          ).then((el) => {
            const startDateAssigned = el.eq(0).text();
            const endDateAssigned = el.eq(1).text();
            expect(startDateAssigned).to.equal(startDay.text());
            expect(endDateAssigned).to.equal(endDay.text());
          });
        });
    });

    it("should publish a new time off ", () => {
      cy.fixture("timeOffs/mockedTimeOff").then((file) => {
        cy.intercept("POST", "**/timeoffs/*", { data: file.data[1] }).as(
          "PublishTimeOff"
        );
      });
      cy.intercept("GET", "**/timeoffs/search?**approved=false*", {
        fixture: "timeOffs/mockedTimeOff.json",
      }).as("GetPendingTimeOffs");
      cy.contains("button", "Apply").click();
      cy.wait("@PublishTimeOff");

      cy.get("@PublishTimeOff").then((xhr) => {
        expect(xhr.response.statusCode).to.equal(200);
        expect(xhr.response.body.data.user.name).to.equal("Created Name");
      });
    });
  });
});
