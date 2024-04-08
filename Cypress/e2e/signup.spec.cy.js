import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage.js";

const signup = new SignUpPage();
const login = new LoginPage();

describe("Sign up test", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });
  

  it("Sign Up successfully and create bank account", () => {
    cy.get('button[type="submit"]').should('not.exist');
    signup.signUp("Jovana","Babic","Jo","joca","joca")
    cy.url().should("eq", Cypress.config().baseUrl + "signin");
    login.login("Jo","joca");
    login.clickSubmit();
    signup.createFirstBankAccount("novi acc","123432234","545654345");
    cy.url().should("eq", "http://localhost:3000/")
  });
  


  it("should throw validation error if FirstName is empty", () => {
    cy.get('input[id="firstName"]').focus();
    cy.get('input[id="firstName"]').blur();
    cy.get('p[id="firstName-helper-text"]')
      .invoke("text")
      .should("equal", "First Name is required");
  });

});