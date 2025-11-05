# Guia de Contribuição

## Fluxo de Trabalho (GitFlow)
- Branch `main` = produção
- Branch `develop` = desenvolvimento
- Branches de feature:
  - Criar: `feature/nome-da-feature`
  - Baseada em: `develop`
  - Após concluir: abrir Pull Request para `develop`

## Padrão de Commits
Use mensagens semânticas:
- feat: nova funcionalidade
- fix: correção
- chore: tarefas gerais
- docs: documentação
- style: formatação
- refactor: melhoria de código

Exemplo:
feat(nav): adiciona navegação por teclado

## Como abrir Pull Request
1. Criar branch a partir de `develop`
2. Fazer commits semânticos
3. Abrir PR usando template
4. Esperar revisão
