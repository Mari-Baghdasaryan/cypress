describe('Tables', () => {
    beforeEach(() => {
        cy.visit('http://testautomationpractice.blogspot.com/')
    })
    it('Table Test', function () {

        //1) Check Value presence anywhere in the table
        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

        //2) Check Value presence in specific row &  column
        cy.get('table[name=BookTable] > tbody > tr:nth-child(4) > td:nth-child(2)').contains('Animesh').should('be.visible')

        //3)Check Value presence based on condition by iterating rows.
        cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($e,index,$list) =>{

            const text=$e.text()
            if(text.includes("Animesh"))
            {
                cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index).then(function(bname)
                {
                    const BookName = bname.text()
                    expect(BookName).to.equal('Learn JS')
                })
            }
        })

        })
    })