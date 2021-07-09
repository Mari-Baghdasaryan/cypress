
describe('API testing', () => {

    Cypress.config('baseUrl','https://gorest.co.in/public-api')



    it('GET- Get user details', () => {
        cy.request('GET', '/posts').then((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(20)
        })
    })

    it('POST - Create a new user', () => {

        cy.request({
            method: 'POST',
            url: '/users',
            headers: {
                "Authorization": "Bearer 7d35e09d63a2d4631eadbc118350c1482ad87390960fa1e965c0bea0022d58e1",
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: {
                "name": "Vdxdvf",
                "gender": "Female",
                "email": 'generatedEmail@mail.com',
                "status": "Active"
            },
        })

            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body).to.not.be.null

            })
    })



    it('DELETE- Delete User',() => {

        cy.request({
            method: 'DELETE', url: '/users/123',
            headers: {
                "Authorization": "Bearer 7d35e09d63a2d4631eadbc118350c1482ad87390960fa1e965c0bea0022d58e1",
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
        })
            .then((response) => {
                expect(response.status).equal(200)
            })
    })
})


