
describe('NopCommerce web page', () => {
    beforeEach(() => {
        cy.visit('https://demo.nopcommerce.com/')
    })

    it('Login Functionality', () => {
        cy.title().should('eq', 'nopCommerce demo store') //verify title

        cy.url().should('include',"nopcommerce") //verify that url include "nopcommerce"

        //Email.password fields
        cy.get('.ico-login').click()
        cy.get('#Email').should('be.visible').should('be.enabled').type('Hello')
        cy.get('#Password').should('be.visible').should('be.enabled').type('hello1')

        //checkbox
        cy.get('#RememberMe').should('be.visible').should('not.be.checked').check()

        //login button
        cy.get('.login-button').should('be.visible').click()

    })
    it('Register Functionality', () => {
        cy.get('.ico-register').click()

        //check radio button
        cy.get('[type=radio]').check('F')

        cy.get('#FirstName').should('be.enabled').type('user1')
        cy.get('#LastName').should('be.enabled').type('user2')

        cy.get('[name=DateOfBirthDay]').select('7').should('have.value','7')
        cy.get('[name=DateOfBirthMonth]').select('March').should('have.value','3')
        cy.get('[name=DateOfBirthYear]').select('1990').should('have.value','1990')

        cy.get('#Email').type('fakemail@gmail.com')

        cy.get('#Company').type('new-company')

        cy.get('input[id="Newsletter"]').should('be.checked').uncheck()

        cy.get('#Password').type('user-user')
        cy.get('#ConfirmPassword').type('user-user')
        cy.get('#register-button').click()

        cy.get('.message-error').contains('The specified email already exists')
    })
  })