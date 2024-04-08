class BankAccountPage {
    
    elements = {
        bankAccountsTab : () => cy.get('a[data-test="sidenav-bankaccounts"]').contains('Bank Accounts'),
        createBtn : () => cy.get('a[data-test="bankaccount-new"]'),
        bankNameInput : () => cy.get('input[id="bankaccount-bankName-input"]'),
        routingNumberInput : () => cy.get('input[id="bankaccount-routingNumber-input"]'),
        accountNumberInput : () => cy.get('input[id="bankaccount-accountNumber-input"]'),
        saveBtn : () => cy.get('button[data-test="bankaccount-submit"]'),
        bankAccountList : () => cy.get('.MuiTypography-root')
    }

    createBankAccount(bankName, routingNumber, accountNumber) {
        this.elements.bankAccountsTab().click();
        this.elements.createBtn().click();
        this.elements.bankNameInput().clear().type(bankName);
        this.elements.routingNumberInput().clear().type(routingNumber);
        this.elements.accountNumberInput().clear().type(accountNumber);
        this.elements.saveBtn().click();
    }

    verifyAccountIsCreated(name) {
        this.elements.bankAccountList().contains(name);
    }

}
export default BankAccountPage;