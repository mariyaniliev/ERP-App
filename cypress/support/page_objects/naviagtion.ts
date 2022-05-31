export class Navigation {
  timeOffsPage() {
    cy.intercept("GET", "**/timeoffs/search?page=1**approved=true*", {
      fixture: "timeOffs/approvedTimeOffs.json",
    }).as("GetApprovedTimeOffs");
    cy.intercept("GET", "**/timeoffs/search?**approved=false*", {
      fixture: "timeOffs/pendingTimeOffs.json",
    }).as("GetPendingTimeOffs");
    cy.visitLoginPage();
    cy.loginToApplication();
    cy.contains("Time Offs").click();
  }
}

export const navigateTo = new Navigation();
