describe('MySuit', () => {

    beforeEach(() => {
        cy.visit('http://testautomationpractice.blogspot.com/')
    })

    it('Title', () => {
        cy.title().should('eq', 'Automation Testing Practice')
    })
    // close new window
    it('Wikipedia', () => {

        cy.get('#Wikipedia1_wikipedia-search-input').type('cypress')
        cy.get('.wikipedia-search-button').click()
        cy.get('[href="https://en.wikipedia.org/wiki/Cypress"]').click()
    })

    it('Alerts', () => {
        cy.get('[onclick="myFunction()"]').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Press a button!')
        })
    })

    it('Date Picker', () => {

        cy.get('#datepicker').click()
        cy.get('.ui-datepicker-calendar > tbody > tr:nth-child(2) > td:nth-child(2)').contains('5').should('be.visible').click()
    })

    it('Selections', () => {
        cy.get('#speed').select('Fast').should('have.value', 'Fast')
        cy.get('#files').select('DOC file').should('have.value', '3')
        cy.get('#products').select('Yahoo').should('have.value', 'Yahoo')
        cy.get('#animals').select('Cat').should('have.value', 'cat')
    })

    //Assertions???
    it('Text Labels', () => {
        cy.get('#Text1').find('.title').contains('Text Labels').should('have.class', 'title')
        cy.get('#Text1 > .widget-content',).should('contain.text','Message $ 123').and('contain.text','Message $ 1234',).and('contain.text','Message#### 1234567')
    })
    it('Volunter Sign Up', () => {
        cy.get('#frame-one1434677811')
        cy.get('.question.top_question').contains('First Name').click().type('user')
        cy.get('#RESULT_TextField-2').type('user2')
        cy.get('#RESULT_TextField-3').type('3453')
        cy.get('#RESULT_TextField-4').type('Armenia')
        cy.get('#RESULT_TextField-5').type('user@mail.com')
        cy.get('#RESULT_RadioButton-7_0').check('Male')

    })
    it('Double Click', () => {

        cy.get('#field1').clear().type('user').should('have.value', 'user')
        cy.get('#field2').should('be.enabled')
        cy.get('[ondblclick="myFunction1()"]').dblclick()
        cy.get('#field2').should('have.value', 'user')

    })
    it('Drag and Drop', () => {

        cy.get('#draggable').drag('#droppable', {force: true})
    })

    //Assertions???
    it('Drag and Drop Images', () => {

        cy.get('#gallery>li:nth-child(1)').drag('#trash', {force: true})
        cy.get('#gallery>li:nth-child(2)').drag('#trash', {force: true})
    })

    it('Trigger', () => {

        cy.get('div#slider span')
            .invoke('attr','style', 'left: 90%;')

    })
})