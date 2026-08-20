# Estrategia de Testes

## Abordagem
A estrategia combina testes manuais para exploracao e verificacao visual com testes automatizados Cypress para os fluxos de maior recorrencia.

## Niveis
- **E2E:** jornada do usuario no navegador em `automation/cypress/e2e/`
- **API:** validacoes de contratos e respostas em `api-tests/`
- **Dados:** consultas e scripts de apoio em `database/`
- **Manual:** casos, cenarios e regressao em `manual-tests/`

## Priorizacao
1. Login e acesso ao catalogo
2. Carrinho
3. Checkout
4. Navegacao institucional

## Regressoes
Executar `npm test` antes de cada entrega e repetir os casos manuais criticos quando houver mudanca de interface.
