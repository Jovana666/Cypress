import MyAccountPage from "../pages/MyAccountPage";
import LoginPage from "../pages/LoginPage";

const login = new LoginPage();
const myaccount = new MyAccountPage();

describe("Second Test", () => {
    beforeEach(() => {
      cy.visit("/signin");
      login.login("Jo", "joca");
      login.clickSubmit();
    });



    it("modify my account", () => {
        myaccount.modifyAccountDetails("email@gmail.com", "0645434567")
        myaccount.verifyAccountDetailsSaved();
      });
})  