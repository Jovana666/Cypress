class SignUpPage {
    
    elements = {
        firstNameInput : () => cy.get('input[id="firstName"]'),
        lastNameInput : () => cy.get('input[id="lastName"]'),
        usernameInput : () => cy.get('input[id="username"]'),
        passwordInput : () => cy.get('input[id="password"]'),
        confirmPasswordInput : () => cy.get('input[id="confirmPassword"]'),
        signIpBtn : () => cy.get('button[data-test="signup-submit"]'),
        getStartedNextBtn : () => cy.get('button[data-test="user-onboarding-next"]'),
        bankNameInput : () => cy.get('input[id="bankaccount-bankName-input"]'),
        routingNumberInput : () => cy.get('input[id="bankaccount-routingNumber-input"]'),
        accountNumberInput : () => cy.get('input[id="bankaccount-accountNumber-input"]'),
        submitBankAccountBtn : () => cy.get('button[data-test="bankaccount-submit"]'),
        finishBtn : () => cy.get('button[data-test="user-onboarding-next"]')
    }

    signUp(first, last, username, password, confirm) {
        this.elements.firstNameInput().type(first);
        this.elements.lastNameInput().type(last);
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
        this.elements.confirmPasswordInput().type(confirm);
        this.elements.signIpBtn().click();

    }

    createFirstBankAccount(name, routingNumber, accountNumber) {
        this.elements.getStartedNextBtn().click();
        this.elements.bankNameInput().type(name);
        this.elements.routingNumberInput().type(routingNumber);
        this.elements.accountNumberInput().type(accountNumber);
        this.elements.submitBankAccountBtn().click();
        this.elements.finishBtn().click();
    }

}
export default SignUpPage;