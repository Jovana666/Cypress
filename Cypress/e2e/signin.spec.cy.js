import LoginPage from "../pages/LoginPage";


const loginPage = new LoginPage();


describe("Sign in Test", () => {
  beforeEach(() => {
    cy.visit("/signin");
  });

  it("should login successfully", () => {
    loginPage.login("Heath93", "s3cret");
    loginPage.clickSubmit();
    cy.url().should("equal", Cypress.config("baseUrl"));
  });


  it("should add cookie if remember me is checked", () => {
    loginPage.login("Heath93", "s3cret");
    loginPage.clickSubmit();
    cy.url().should("equal", Cypress.config("baseUrl"));
    cy.getCookie('connect.sid').its('value').should('exist');
   // .should('have.property', 'Expires/Max-Age')
  });


  it("should throw an error on invalid login", () => {
    loginPage.login("Milan","password")
    loginPage.clickSubmit();
    cy.contains('.MuiAlert-message', 'Username or password is invalid').should('be.visible');
  });
})