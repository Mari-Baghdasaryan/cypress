class LoginPage {
    visit()
    {
        cy.visit('https://admin-demo.nopcommerce.com/')
    }

    fillEmail(value) {
        const field = cy.get('#Email')
        field.clear()
        field.type(value)
    }

    fillPassword(value) {
        const field = cy.get('#Password')
        field.clear()
        field.type(value)
       
    }

    submit() {
        const button = cy.get('[type="submit"]')
        button.click()
    }
}
    export default LoginPage
