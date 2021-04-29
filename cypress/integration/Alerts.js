
describe('Alerts', () => {
      beforeEach(() => {
          cy.visit('http://demo.automationtesting.in/Alerts.html')
      })
    it('Alert with Ok', function () {

        cy.get('[onclick="alertbox()"]').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })

        it('Alert with Ok and Cancel', function () {

            cy.get('[href="#CancelTab"]').click()
            cy.get('[onclick="confirmbox()"]').click()
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Press a Button !')
            })
        })

       it('Alert with Textbox', function () {

        cy.get('[href="#Textbox"]').click()
        cy.get('[onclick="promptbox()"]').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Please enter your name')
        })

    })
})




