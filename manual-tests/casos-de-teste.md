# Casos de Teste

| ID | Caso | Resultado esperado | Automacao |
|---|---|---|---|
| CT-001 | Login com credenciais validas | Usuario acessa `/inventory.html` | `login.cy.js` |
| CT-002 | Login com senha invalida | Mensagem de erro e exibida | `login.cy.js` |
| CT-003 | Abrir pagina About | Pagina institucional e aberta | `about.cy.js` |
| CT-004 | Adicionar produto ao carrinho | Badge exibe 1 item | `carrinho.cy.js` |
| CT-005 | Remover produto do carrinho | Badge deixa de existir | `carrinho.cy.js` |
| CT-006 | Finalizar compra | Mensagem de confirmacao e exibida | `PaginaCompras.cy.js` |
