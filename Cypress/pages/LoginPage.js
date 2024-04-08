class LoginPage {
    
    elements = {
        usernameInput : () => cy.get('input[id="username"]'),
        passwordInput : () => cy.get('input[id="password"]'),
        rememberMeCheckBox : () => cy.get('input[type="checkbox"]'),
        submitBtn : () => cy.get('button[type="submit"]'),
        signIpBtn : () => cy.get('a[data-test="signup"]')
    }

    login(username, password) {
        this.elements.usernameInput().type(username);
        this.elements.passwordInput().type(password);
    }

    clickSubmit() {
        this.elements.rememberMeCheckBox().check().should('be.checked');
        this.elements.submitBtn().click();
    }

}
export default LoginPage;