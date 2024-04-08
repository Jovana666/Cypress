class TransactionsPage {
    
    elements = {
        friendsTab : () => cy.get('a[data-test="nav-contacts-tab"]').contains('Friends'),
        createTrxBtn : () => cy.get('a[data-test="transaction-list-empty-create-transaction-button"]'),
        contact : () => cy.get('MuiTypography-root ').contains('Lia Rosenbaum'),
        amountField : () => cy.get('input[id="amount"]'),
        addANoteField : () => cy.get('input[id="transaction-create-description-input"]'),
        payBtn : () => cy.get('button[data-test="transaction-create-submit-payment"]'),
    }

    createTransaction(amount, note) {
        this.elements.friendsTab().click();
        this.elements.createTrxBtn().click();
        this.elements.amountField().clear().type(amount);
        this.elements.addANoteField().clear().type(note);
        this.elements.payBtn().click();
    }



}
export default TransactionsPage;