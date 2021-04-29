describe ('bhjh',() =>
{
    it('Volunter Sign Up', () => {
        cy.visit('http://testautomationpractice.blogspot.com/')


        cy.get('#frame-one1434677811').then(($iframe) => {
           const $iframeContent = $iframe.contents().find('body')
        cy.wrap($iframeContent)
            .click()
            .type('bhj')
    })


    })
})
