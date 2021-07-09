describe('CommandsSuit', () => {

    beforeEach(() => {
        cy.visit('https://admin-demo.nopcommerce.com/')


    })

    it('LoginTest', () => {

        cy.login('admin@yourstore.com','admin')
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
        cy.get('.navbar-nav > :nth-child(3) > .nav-link').click()

        cy.login('admin@yourstore.com','admin9') //invalid pass
        cy.title().should('not.be.equal','Dashboard / nopCommerce administration')

        cy.login('admin@yourstore88.com','admin')
        cy.title().should('be.equal','Your store. Login')

    })

    it('Add customer', () => {
         // add
        cy.login('admin@yourstore.com','admin')

        cy.log('Add customer..')

    })
    it('Edit customer', () => {

        cy.login('admin@yourstore.com','admin')

        cy.log('Edit customer..')
    })
})