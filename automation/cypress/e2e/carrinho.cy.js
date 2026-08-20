describe('Funcionalidade: Carrinho de Compras', () => {


beforeEach(() => {
    // Realiza login antes de cada teste
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
})


it('Deve adicionar um produto ao carrinho e verificar o carrinho', () => {
    // Adiciona o primeiro produto ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // verifica se tem 1 item no carrinho
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
    
    // remover o item do carrinho
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    // verifica se o carrinho está vazio
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
})


})