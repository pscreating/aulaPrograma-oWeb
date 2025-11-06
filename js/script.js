/* ============================================================
   script.js - ONG AMIGO FELINO
   SPA, menu, formulário, toasts e acessibilidade
============================================================ */

/* -------------------- TOAST SYSTEM -------------------- */
function showToast(msg, type = "success", container) {
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = msg;

  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 50);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

/* -------------------- FOOTER DINÂMICO -------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
});

/* -------------------- MENU HAMBURGUER (VERSÃO ANTIGA REMOVIDA) -------------------- */
/* A versão antiga dava conflito e não tinha acessibilidade,
   por isso foi substituída pela versão FINAL acessível no final do arquivo.
*/


/* -------------------- SPA: CONTEÚDOS DAS PÁGINAS -------------------- */
const pages = {
  index: `
    <section class="secao">
      <h2>Quem Somos</h2>
      <p>Somos uma organização sem fins lucrativos dedicada ao resgate, castração e adoção...</p>
      <img src="imagens ONG/gato-resgate.jpg" width="500">
    </section>
    <section>
      <h2>Nossa Missão</h2>
      <p>Promover o bem-estar animal...</p>
      <img src="imagens ONG/gato-cuidado.jpg" width="500">
    </section>
    <section>
      <h2>Histórias de Adoção</h2>
      <p>Cada gato adotado é uma vitória!</p>
      <img src="imagens ONG/adocao.jpg" width="500">
    </section>
    <section>
      <h2>Entre em Contato</h2>
      <address>
        <p>📍 Rua dos Felinos, 123 - São Paulo/SP</p>
        <p>📞 (11) 99876-5432</p>
        <p>✉️ contato@amigofelino.org.br</p>
      </address>
    </section>
  `,

  projetos: `
    <h2>Nossos Projetos</h2>
    <section>
      <h3>Resgate de Gatos</h3>
      <p>Identificamos gatos abandonados...</p>
      <img src="imagens ONG/gato-resgate.jpg">
    </section>

    <section>
      <h3>Castração</h3>
      <p>Garantimos castração segura...</p>
      <img src="imagens ONG/gatocastra.jpg">
    </section>

    <section>
      <h3>Adoção Responsável</h3>
      <p>Adoção consciente e responsável...</p>
      <img src="imagens ONG/adocaocat.jpg">
    </section>

    <aside>
      <h3>Como ajudar</h3>
      <img src="imagens ONG/voluntarios.png">
      <ul class="lista-ajuda">
        <li>Voluntariado</li>
        <li>Doações financeiras</li>
        <li>Doações de ração e materiais</li>
      </ul>
      <a class="btn" href="#" id="quero-ajudar">Quero ajudar</a>
    </aside>
  `,

  /* ============================================================
     FORMULÁRIO CADASTRO — VERSÃO ACESSÍVEL (LABEL + ARIA)
  ============================================================= */
  cadastro: `
    <h2>Formulário de Cadastro</h2>

    <form id="form-cadastro">

      <label for="nome">Nome Completo:</label>
      <input type="text" id="nome" name="nome" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="cpf">CPF:</label>
      <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required>

      <label for="telefone">Telefone:</label>
      <input type="tel" id="telefone" name="telefone" required>

      <label for="nascimento">Data de Nascimento:</label>
      <input type="date" id="nascimento" name="nascimento" required>

      <label for="endereco">Endereço:</label>
      <input type="text" id="endereco" name="endereco" required>

      <label for="cep">CEP:</label>
      <input type="text" id="cep" name="cep" required>

      <label for="cidade">Cidade:</label>
      <input type="text" id="cidade" name="cidade" required>

      <label for="estado">Estado:</label>
      <select id="estado" name="estado" required>
        <option value="">Selecione</option>
        <option value="SP">SP</option>
        <option value="RJ">RJ</option>
        <option value="MG">MG</option>
      </select>

      <button type="submit">Enviar Cadastro</button>

      <!-- Agora com ARIA-LIVE para acessibilidade -->
      <div class="toast-container" aria-live="polite" aria-atomic="true"></div>

    </form>
  `
};


/* -------------------- CARREGAMENTO DINÂMICO DAS PÁGINAS -------------------- */
function loadPage(page) {
  const main = document.querySelector("main");
  if (!main) return;

  main.innerHTML = pages[page] || pages.index;

  // Pequena animação
  main.querySelectorAll("*").forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transition = "opacity .5s";
    }, 50);
  });

  const btnAjuda = document.getElementById("quero-ajudar");
  if (btnAjuda) btnAjuda.addEventListener("click", () => loadPage("cadastro"));

  if (page === "cadastro") {
    attachFormValidation();
  }
}

/* -------------------- VALIDAÇÃO DO FORMULÁRIO -------------------- */
function attachFormValidation() {
  const form = document.getElementById("form-cadastro");
  if (!form) return;

  const container = form.querySelector(".toast-container");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.checkValidity()) {
      const dadosCadastro = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        nascimento: document.getElementById("nascimento").value,
        endereco: document.getElementById("endereco").value,
        cep: document.getElementById("cep").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        dataRegistro: new Date().toLocaleString()
      };

      const lista = JSON.parse(localStorage.getItem("cadastros")) || [];
      lista.push(dadosCadastro);
      localStorage.setItem("cadastros", JSON.stringify(lista));

      showToast("✅ Cadastro realizado com sucesso!", "success", container);
      form.reset();
      return;
    }

    showToast("❗ Preencha todos os campos corretamente.", "error", container);
  });
}

/* -------------------- MENU NAV -------------------- */
function initNavLinks() {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      loadPage(page);
    });
  });
}


/* ============================================================
   MENU ACESSÍVEL
============================================================ */

const menuBtn = document.querySelector(".menu-hamburguer");
const navElement = document.querySelector("nav");

if (menuBtn && navElement) {

  // Abre/fecha menu no clique
  menuBtn.addEventListener("click", () => {
    const aberto = menuBtn.getAttribute("aria-expanded") === "true";

    menuBtn.setAttribute("aria-expanded", !aberto);
    menuBtn.setAttribute("aria-label", aberto ? "Abrir menu" : "Fechar menu");

    navElement.classList.toggle("ativo");
  });

  // Acessível via ENTER ou ESPAÇO
  menuBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      menuBtn.click();
    }
  });
}

// ===============================
// ACESSIBILIDADE: TEMAS
// ===============================

const btnDark = document.getElementById("btn-dark");
const btnContrast = document.getElementById("btn-contrast");

// Carrega tema salvo no localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}
if (savedTheme === "contrast") {
  document.body.classList.add("high-contrast");
}

// ----- MODO ESCURO -----
if (btnDark) {
  btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const ativo = document.body.classList.contains("dark-mode");
    btnDark.setAttribute("aria-pressed", ativo);

    // Salva no localStorage
    if (ativo) localStorage.setItem("theme", "dark");
    else localStorage.removeItem("theme");
  });
}

// ----- ALTO CONTRASTE -----
if (btnContrast) {
  btnContrast.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");

    const ativo = document.body.classList.contains("high-contrast");
    btnContrast.setAttribute("aria-pressed", ativo);

    if (ativo) localStorage.setItem("theme", "contrast");
    else localStorage.removeItem("theme");
  });
}

/* -------------------- INICIALIZAÇÃO -------------------- */
loadPage("index");
initNavLinks();
