 import LoginPage from "../POM/LoginPage";

describe('TestSuit', () => {

    it('Login Test', () => {

        const lp = new LoginPage()
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

    })

})
