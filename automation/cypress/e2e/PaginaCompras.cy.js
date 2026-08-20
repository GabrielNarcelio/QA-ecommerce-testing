describe('Funcionalidade de formulario de compra', () => {
    beforeEach('Funcionalidade de Login', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

})

    it('deve adicionar um produto ao carrinho', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('itachi')
        cy.get('#last-name').type('uchiha')
        cy.get('#postal-code').type('33-141040')
        cy.get('#continue').click()

        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
       
    })

})