describe('API testing', () => {

    Cypress.config('baseUrl','https://gorest.co.in/public-api')

    const AccessToken = "Bearer 7d35e09d63a2d4631eadbc118350c1482ad87390960fa1e965c0bea0022d58e1"

    function generateNewEmail() {
        let text = '';
        let alphabet = 'ABCDEFGHIJKLMNOP';

        for(let i = 0; i <10; i++)
            text += alphabet.charAt((Math.floor(Math.random()* alphabet.length)))
        return text + '@gmail.com';
    }
    const generatedEmail = generateNewEmail()

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
                "Authorization": AccessToken,
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: {
                "name": "Ann Ann",
                "gender": "Female",
                "email": generatedEmail,
                "status": "Active"
            },
        })

            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body).to.not.be.null
                expect(response.body.data).to.have.property('name','Ann Ann')

            })
    })

    it('PUT- Update User Details',() => {
        cy.request({
            method: 'PUT',
            url: '/users/123',
            headers: {
                "Authorization": AccessToken,
                "Accept":"application/json",
                "Content-Type":"application/json"
             },
            body: {
                "name": "Ann Ann",
                "email": generatedEmail,
                "status": "Active"
             },

       })
        .then((response) => {
            expect(response.status).eq(200)

        })
    })

    it('DELETE- Delete User',() => {

        cy.request({
            method: 'DELETE', url: '/users/123',
            headers: {
                "Authorization": AccessToken,
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
        })
            .then((response) => {
                expect(response.status).equal(200)
            })
    })
})