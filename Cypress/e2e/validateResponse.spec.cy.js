import LoginPage from "../pages/LoginPage";


const loginPage = new LoginPage();

describe('Validate bank account response', () => {
    beforeEach(() => {
      cy.visit("/signin");
      loginPage.login("joca666", "joca");
      loginPage.clickSubmit();
      cy.get('a[data-test="sidenav-bankaccounts"]').click();
    })


    it('should validate GraphQL response', () => {
      const gqlQuery = `
          query {
              listBankAccount {
                  id
                  bankName
              }
          }
      `;
      cy.request({
          method: 'POST',
          url: '/graphql',
          body: {
              query: gqlQuery
          }
      }).then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property('data');
          expect(response.body.data).to.have.property('listBankAccount');
          expect(response.body.data.listBankAccount).to.be.an('array');
          const bankAccount = response.body.data.listBankAccount[0];
          expect(bankAccount).to.have.property('id');
          expect(bankAccount).to.have.property('bankName');
      });
  });
    
  });