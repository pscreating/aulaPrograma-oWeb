# 🐱 ONG Amigo Felino  
### Entrega Final – Experiência Prática IV • Desenvolvimento Web

Este projeto consiste na criação de um site acessível, responsivo e otimizado, seguindo as diretrizes da WCAG 2.1 (Nível AA), 
utilizando boas práticas de GitFlow, versionamento semântico, documentação técnica e deploy.

A aplicação traz uma SPA (Single Page Application) totalmente funcional, com navegação dinâmica, formulário validado, componentes interativos e 
modos de acessibilidade para usuários com diferentes necessidades visuais.

---

# ✅ Funcionalidades Principais

## 🧩 **SPA — Single Page Application**
- Navegação dinâmica entre páginas sem recarregar.
- Conteúdo carregado via templates JavaScript.
- Transições suaves aplicadas dinamicamente.
- Estrutura totalmente modular.

## 🖥️ **Menu Hambúrguer Acessível**
- Funciona com clique, Enter e Espaço.
- `aria-expanded` e `aria-label` atualizados dinamicamente.
- Navegação por teclado totalmente funcional.

## ✅ **Formulário com Validação Completa**
- Validação nativa com `form.checkValidity()`.
- Campos com feedback visual (válido/inválido).
- Toasts acessíveis para sucesso e erro.
- Salvamento automático via `localStorage`.

## 🔔 **Sistema de Toasts Acessíveis**
- `aria-live="polite"` para suporte a leitores de tela.
- Toasts animados, temporários e não intrusivos.

---

# ♿ **Acessibilidade – WCAG 2.1 (Nível AA)**

Esta entrega implementa todos os requisitos solicitados:

### ✅ **1. Navegação por teclado**
- Todos os links, botões, inputs e menus acessíveis com TAB.
- Menu hambúrguer funciona com TAB, Enter e Espaço.

### ✅ **2. Estrutura Semântica Correta**
- Uso adequado de:  
  `<header>`, `<main>`, `<footer>`, `<section>`, `<address>`, `<nav>`
- Uso de `role="banner"`, `role="main"`, `role="contentinfo"`.

### ✅ **3. Skip Link**
- Link “Pular para conteúdo principal” funcional.

### ✅ **4. Labels em todos os Inputs**
- `<label for="">` associado corretamente a cada campo.

### ✅ **5. Suporte para Leitores de Tela**
- `aria-label`
- `aria-expanded`
- `aria-pressed`
- `aria-live="polite"`

### ✅ **6. Modos de Acessibilidade**
- ✅ Modo Escuro  
- ✅ Alto Contraste  
- Salvos no `localStorage`.  
- Adaptam texto, fundo, sombras e bordas.

### ✅ **7. Contraste**
- Verificado para manter legibilidade mínima de 4.5:1.
- Ajustes com filtros (`brightness`, `contrast`) para acessibilidade leve.

---

# 🚀 **Otimização para Produção**

### ✅ Minificação dos Arquivos
- CSS e JS prontos para minificação (processo sugerido via Minify, CleanCSS etc.).
- Arquivos organizados para fácil geração das versões `.min`.

### ✅ Compressão de Imagens
- Imagens tratadas para redução de tamanho (TinyPNG/Squoosh recomendado).
- Estrutura pronta para substituição das versões otimizadas.

### ✅ Performance Geral
- Código modular.
- HTML limpo.
- SPA reduz requisições desnecessárias.

---

# 🔧 **Tecnologias Utilizadas**
- **HTML5** (semântico)
- **CSS3** (Grid, Flexbox, animações)
- **JavaScript ES6+**
- **LocalStorage**
- **WCAG 2.1**
- **GitFlow**
- **GitHub Pages** (deploy)

---

# 🗂️ Estrutura do Projeto:

📁 raiz do projeto/
│── index.html
│── README.md
│
├── 📁 css/
│ └── styles.css
│
├── 📁 js/
│ └── script.js
│
└── 📁 imagens ONG/
└── (todas as imagens utilizadas)


---

# 🧪 Como Executar o Projeto

### ✅ **Não precisa instalar nada. Funciona direto no navegador.**

### 1️⃣ Clonar o repositório:
```bash
git clone https://github.com/pscreating/aulaPrograma-oWeb
2️⃣ Abrir:
index.html

✅ Compatível com:

Windows

Linux

macOS

Navegadores modernos (Chrome, Firefox, Edge)

🛠️ Fluxo de Desenvolvimento — GitFlow

Este projeto segue o modelo GitFlow:

✅ Branches utilizadas:

main → versão de produção

develop → versão de desenvolvimento

feature/a11y-basica → implementação da acessibilidade

✅ Pull Request Criado:

Feature → Develop → Main

✅ Commits semânticos:

Exemplos:

feat: implementa acessibilidade da Atividade 4

fix: corrige contraste do menu

chore: adiciona templates de Issues

🏷️ Versionamento Semântico

Release atual: v1.0.0
Publicada no GitHub Releases.

🌐 Deploy (GitHub Pages)

O projeto está publicado automaticamente via GitHub Pages.

🧑‍🎓 Objetivo Acadêmico

Este projeto cumpre todos os requisitos da Entrega 4:

✅ GitFlow completo
✅ Commits semânticos
✅ Pull Request documentado
✅ Release v1.0.0
✅ Acessibilidade WCAG 2.1 AA
✅ Navegação por teclado
✅ Estrutura semântica
✅ ARIA
✅ Skip Link
✅ Modo Escuro
✅ Modo Alto Contraste
✅ SPA funcional
✅ Formulário com validação
✅ Toasts acessíveis
✅ Documentação técnica completa
✅ Otimização pronta para produção

👩🏻‍💻 Autora

Ana Paula Santos
Projeto desenvolvido para disciplina de Programação Web.

📜 Licença

Projeto acadêmico. Não destinado a uso comercial.

