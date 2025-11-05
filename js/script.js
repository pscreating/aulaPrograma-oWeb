/* ============================================================
   script.js - ONG AMIGO FELINO
   SPA, menu, formulário e toast
  ======================================== */

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

/* -------------------- MENU HAMBURGUER -------------------- */
const menuHamburguer = document.querySelector(".menu-hamburguer");
const nav = document.querySelector("nav");

if (menuHamburguer) {
  menuHamburguer.addEventListener("click", () => {
  const expanded = menuHamburguer.getAttribute("aria-expanded") === "true";
  menuHamburguer.setAttribute("aria-expanded", !expanded);
  menuHamburguer.setAttribute("aria-label", expanded ? "Abrir menu" : "Fechar menu");

  nav.classList.toggle("active");
});
}

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
  cadastro: `
    <h2>Formulário de Cadastro</h2>
    <form id="form-cadastro">
      <label>Nome Completo:</label>
      <input type="text" id="nome" required>

      <label>Email:</label>
      <input type="email" id="email" required>

      <label>CPF:</label>
      <input type="text" id="cpf" placeholder="000.000.000-00" required>

      <label>Telefone:</label>
      <input type="tel" id="telefone" required>

      <label>Data de Nascimento:</label>
      <input type="date" id="nascimento" required>

      <label>Endereço:</label>
      <input type="text" id="endereco" required>

      <label>CEP:</label>
      <input type="text" id="cep" required>

      <label>Cidade:</label>
      <input type="text" id="cidade" required>

      <label>Estado:</label>
      <select id="estado" required>
        <option value="">Selecione</option>
        <option value="SP">SP</option>
        <option value="RJ">RJ</option>
        <option value="MG">MG</option>
      </select>

      <button type="submit">Enviar Cadastro</button>

      <div class="toast-container"></div>

    </form>
  `
};

/* -------------------- FUNÇÃO PRINCIPAL DA SPA -------------------- */
function loadPage(page) {
  const main = document.querySelector("main");
  if (!main) return;

  main.innerHTML = pages[page] || pages.index;

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

/* -------------------- VALIDAÇÃO FORMULÁRIO -------------------- */
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

/* -------------------- MENU NAV LINKS -------------------- */
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

/* -------------------- INICIALIZAÇÃO -------------------- */
loadPage("index");
initNavLinks();
