// =====================================================================
// BLOG DE HISTÓRIA - C.E. ENIRA MORAES RIBEIRO
// Script separado do HTML para ficar mais organizado, como recomendado
// no curso da Alura.
// =====================================================================

document.addEventListener("DOMContentLoaded", function () {
    configurarAnoRodape();
    configurarAltoContraste();
    configurarBotoesDeReacao();
});

// ---------------------------------------------------------------------
// Ano automático no rodapé
// ---------------------------------------------------------------------
function configurarAnoRodape() {
    const spanAno = document.getElementById("ano-atual");
    if (spanAno) {
        spanAno.textContent = new Date().getFullYear();
    }
}

// ---------------------------------------------------------------------
// ALTO CONTRASTE
// A preferência do usuário fica salva no navegador (localStorage),
// então quando a pessoa voltar ao blog, o modo escolhido continua.
// ---------------------------------------------------------------------
function configurarAltoContraste() {
    const CHAVE_ARMAZENAMENTO = "blog-historia-alto-contraste";
    const botao = document.getElementById("btn-acessibilidade");

    if (!botao) return;

    const preferenciaSalva = localStorage.getItem(CHAVE_ARMAZENAMENTO) === "ativo";
    aplicarAltoContraste(preferenciaSalva);

    botao.addEventListener("click", function () {
        const estaAtivo = document.body.classList.contains("alto-contraste");
        aplicarAltoContraste(!estaAtivo);
        localStorage.setItem(CHAVE_ARMAZENAMENTO, !estaAtivo ? "ativo" : "inativo");
    });

    function aplicarAltoContraste(ativar) {
        document.body.classList.toggle("alto-contraste", ativar);
        botao.setAttribute("aria-pressed", String(ativar));
    }
}

// ---------------------------------------------------------------------
// BOTÕES DE REAÇÃO
// Cada botão guarda sua própria contagem em localStorage, usando o
// id do post + o emoji como chave única.
// ---------------------------------------------------------------------
function configurarBotoesDeReacao() {
    const botoesReacao = document.querySelectorAll(".botao-reacao");

    botoesReacao.forEach(function (botao) {
        const postElemento = botao.closest(".reacoes");
        const idPost = postElemento ? postElemento.dataset.postId : "post";
        const emoji = botao.dataset.emoji || "reacao";
        const chave = `blog-historia-reacao-${idPost}-${emoji}`;

        const contador = botao.querySelector(".botao-reacao__contador");
        const jaCurtiu = localStorage.getItem(chave) === "true";

        atualizarVisual(jaCurtiu);

        botao.addEventListener("click", function () {
            const curtidoAgora = !botao.classList.contains("botao-reacao--ativo");
            const valorAtual = Number(contador.textContent);

            contador.textContent = curtidoAgora ? valorAtual + 1 : valorAtual - 1;
            localStorage.setItem(chave, String(curtidoAgora));
            atualizarVisual(curtidoAgora);
        });

        function atualizarVisual(ativo) {
            botao.classList.toggle("botao-reacao--ativo", ativo);
        }
    });
}