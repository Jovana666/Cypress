import LoginPage from "../pages/LoginPage";
import TransactionsPage from "../pages/TransactionsPage";

const loginPage = new LoginPage();
const trx = new TransactionsPage();

describe("Create new transaction Test", () => {
    beforeEach(() => {
      cy.visit("/signin");
      loginPage.login("Heath93", "s3cret");
      loginPage.clickSubmit();
    })


    it("should create new trx", () => {
        trx.createTransaction(30,"test note");
    });
});