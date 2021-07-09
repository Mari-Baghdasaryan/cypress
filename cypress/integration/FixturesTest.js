describe('Fixtures', () => {
let new_user
        before(() => {
            cy.fixture('example').then((user) => {
                new_user = user
            })
        })

    it('Fixtures Test', () => {

        cy.visit('https://www.facebook.com/')

        cy.get('#email').type(new_user.email)
        cy.get('#pass').type(new_user.password)
        cy.get('#loginbutton').click()


    })
})