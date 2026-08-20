describe('Página de Login do Sauce Demo', () => {
  
  it('Deve fazer login com sucesso usando credenciais válidas', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Valida que o login deu certo checando a URL
    cy.url().should('include', '/inventory.html')
  })

  it('Deve exibir mensagem de erro ao usar senha inválida', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('senha_errada_123')
    cy.get('#login-button').click()

    // Valida que o login falhou e a mensagem correta apareceu
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

})



