class MyAccountPage {
    
    elements = {
        myAccountTab : () => cy.get('a[data-test="sidenav-user-settings"]').contains('My Account'),
        emailInput : () => cy.get('input[id="user-settings-email-input"]'),
        phoneNumberInput : () => cy.get('input[id="user-settings-phoneNumber-input"]'),
        saveBtn : () => cy.get('button[data-test="user-settings-submit"]'),
        notificationsTab : () => cy.get('a[data-test="sidenav-user-settings"]')
    }

    modifyAccountDetails(email, phoneNumber) {
        this.elements.myAccountTab().click();
        this.elements.emailInput().clear().type(email);
        this.elements.phoneNumberInput().clear().type(phoneNumber);
        this.elements.saveBtn().click();
    }

    verifyAccountDetailsSaved() {
        this.elements.notificationsTab().click();
        this.elements.myAccountTab().click();
        this.elements.emailInput().click().should('have.value','email@gmail.com')
    }

}
export default MyAccountPage;