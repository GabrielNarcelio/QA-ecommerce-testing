# Plano de Testes

## Objetivo
Validar os fluxos essenciais do e-commerce Sauce Demo, com foco em autenticacao, navegacao, carrinho e checkout.

## Escopo
- Login com credenciais validas e invalidas
- Acesso a pagina institucional
- Adicao e remocao de produto no carrinho
- Finalizacao de uma compra
- Validacao manual, E2E e API quando houver endpoint disponivel

## Fora do escopo
Performance, seguranca ofensiva, pagamentos reais e compatibilidade com navegadores ainda nao configurados.

## Criterios de entrada
- Ambiente Sauce Demo acessivel
- Dependencias Node instaladas
- Massa de teste valida disponivel

## Criterios de saida
- Todos os casos criticos executados
- Defeitos registrados em `bug-reports/`
- Evidencias anexadas em `evidencias/`

## Riscos
Indisponibilidade do ambiente externo, alteracoes de seletores e variacao de dados entre execucoes.
