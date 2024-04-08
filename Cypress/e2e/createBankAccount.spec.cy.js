import BankAccountPage from "../pages/BankAccountPage";
import LoginPage from "../pages/LoginPage";


const loginPage = new LoginPage();
const bankAccount = new BankAccountPage();


describe("Create New Bank Account Test", () => {
    beforeEach(() => {
      cy.visit("/signin");
      loginPage.login("Heath93", "s3cret");
      loginPage.clickSubmit();
    })


    it("should create new bank account", () => {
        bankAccount.createBankAccount("Ime racuna2","123456765", "432664544");
        bankAccount.verifyAccountIsCreated("Ime racuna2");
    });
});