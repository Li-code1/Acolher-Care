(function () {
  // ===== CONFIGURE AQUI =====
  // Número do WhatsApp com código do país + DDD, só números (ex.: 5513999999999)
  var NUMERO = "5500000000000";
  // Como o número aparece escrito na página
  var NUMERO_EXIBIDO = "(00) 00000-0000";
  // ==========================

  var BASE = "https://wa.me/" + NUMERO + "?text=";
  function link(texto) { return BASE + encodeURIComponent(texto); }

  document.getElementById("fone-exibido").textContent = NUMERO_EXIBIDO;

  // Botões de WhatsApp
  var padrao = "Olá! Vim pelo site da Acolher Care e gostaria de saber mais sobre o cuidado de idosos em casa.";
  document.querySelectorAll("[data-whats]").forEach(function (a) {
    var plano = a.getAttribute("data-plano");
    var texto = plano ? padrao + " Tenho interesse no " + plano + "." : padrao;
    a.setAttribute("href", link(texto));
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });

  // Menu mobile
  var burger = document.getElementById("burger");
  var menu = document.getElementById("menu");
  function fechar() { menu.classList.remove("aberto"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", function () {
    var aberto = menu.classList.toggle("aberto");
    burger.setAttribute("aria-expanded", aberto ? "true" : "false");
  });
  menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", fechar); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") fechar(); });

  // Formulário -> WhatsApp
  var form = document.getElementById("form-contato");
  var erro = document.getElementById("erro");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var nome = form.nome.value.trim();
    if (!nome) {
      erro.textContent = "Por favor, informe seu nome para continuarmos.";
      form.nome.focus();
      return;
    }
    erro.textContent = "";
    var texto = "Olá! Meu nome é " + nome + ".\n" +
      "Preciso de: " + form.cuidado.value + ".\n" +
      "Período de plantão: " + form.periodo.value + "." +
      (form.msg.value.trim() ? "\nDetalhes: " + form.msg.value.trim() : "") +
      "\n\n(Mensagem enviada pelo site da Acolher Care)";
    window.open(link(texto), "_blank", "noopener");
  });
})();
