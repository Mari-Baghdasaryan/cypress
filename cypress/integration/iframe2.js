it('gets the post', () => {
    cy.visit('https://jsonplaceholder.cypress.io').contains('XHR in iframe')
    cy.get('iframe')
})