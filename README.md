# QA E-commerce Testing

Projeto de testes de qualidade para um e-commerce, reunindo planejamento, testes manuais, automacao E2E, API, banco de dados e evidencias.

## Estrutura

- `docs/`: plano, estrategia e relatorio final
- `manual-tests/`: casos, cenarios e checklist de regressao
- `bug-reports/`: registros de defeitos encontrados
- `evidencias/`: evidencias organizadas por bugs e testes
- `api-tests/`: colecao e orientacoes para testes de API
- `database/`: scripts e orientacoes de validacao de dados
- `automation/cypress/`: testes E2E, fixtures e comandos Cypress

## Automacao Cypress

Os testes existentes foram mantidos e adaptados para a nova pasta:

- `automation/cypress/e2e/login.cy.js`: autenticacao com credenciais validas e invalidas
- `automation/cypress/e2e/about.cy.js`: acesso a pagina institucional
- `automation/cypress/e2e/carrinho.cy.js`: adicao e remocao de produto
- `automation/cypress/e2e/PaginaCompras.cy.js`: checkout completo
- `automation/cypress/e2e/spec.cy.js`: teste de referencia do Cypress
- `automation/cypress/support/`: comandos e configuracao global
- `automation/cypress/fixtures/`: dados de apoio

## Como executar

1. Instale as dependencias: `npm install`
2. Abra o Cypress: `npm run test:open`
3. Execute em modo headless: `npm test`

## Aplicacao sob teste

Os cenarios automatizados usam o ambiente publico Sauce Demo: `https://www.saucedemo.com/`.
