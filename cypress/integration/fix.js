
describe('Fixtures', () => {

    it('Fixtures Test', () => {
        cy.visit('https://www.facebook.com/')

        cy.fixture('example.json').then(user => {

            cy.get('#email').type(user.email)
            cy.get('#pass').type(user.password)

        })
        cy.get('#loginbutton').click()
    })

})




