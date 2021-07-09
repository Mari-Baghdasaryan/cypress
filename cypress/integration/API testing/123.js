describe('API testing', () => {

    Cypress.config('baseUrl', 'https://reqres.in')

    it('GET-Get user details', () => {

        cy.request("GET", '/api/users/2').then((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.not.be.null
        })
    })

    it('POST - Create a new user', () => {
        const user = {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request('POST', '/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body).to.have.property('name', 'morpheus')

        })
    })

    it('PUT-Update user details', () => {

            cy.request({
                method: "PUT",
                url: '/api/users/2',
                body: {
                    "name": "morpheus",
                    "job": "zion resident"
                },
                failOnStatusCode: false
            }).its('status').should('eq', 200)

    })
    it('DELETE ', () => {

        cy.request('DELETE', '/api/users/2').then((response) => {
            expect(response.status).equal(204)

        })
    })

    it("PUT-2",() => {
        const item = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
        cy.request('POST','/api/register', item).then((response) => {
            expect(response.status).equal(200)
            expect({ email: 'eve.holt@reqres.in' }).to.eql({ email: 'eve.holt@reqres.in' })
            expect(response.body.id).eq(4)
            expect(response.body.token).eq("QpwL5tke4Pnpja7X4")
            expect(response.body).to.not.be.null
          

        })
    })
})
