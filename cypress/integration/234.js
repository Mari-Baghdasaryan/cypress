describe('CommandsSuit', () => {
    it('LoginTest', () => {
        cy.visit('https://youtube.com/')
        cy.get('#search').click().type('hillsong{enter}')

       cy.contains('What A Beautiful Name - Hillsong Worship').click()
       cy.location('pathname')
           .should('eq','/watch?v=nQWFzMvCfLE')
        cy.url()
            .should('include','/watch?v=nQWFzMvCfLE')

    })
})

//if I will write this in plugins/index.js and import this in my test, it will clear my database before each running
// on('task',{
//    'clear:db': () => {
//       return clearDatabase()
//     }
// in my test---
// beforeEach( () => {
//   cy.task('clear:db')
//  })


