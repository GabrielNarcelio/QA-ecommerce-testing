describe('pagina soobre', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('deve acessar a pagina sobre', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#about_sidebar_link').click()
    })

})