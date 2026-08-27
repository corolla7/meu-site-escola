// =========================================================
// Colégio Enira Moraes Ribeiro — Blog da Escola
// Todo o conteúdo de notícias abaixo é FICTÍCIO, para servir
// de exemplo. Edite o array `noticias` com as notícias reais
// da sua escola.
// =========================================================

const noticias = [
  {
    categoria: "Ciências",
    titulo: "Feira de Ciências reúne 30 projetos sobre sustentabilidade",
    resumo: "Turmas do 8º e 9º ano apresentaram protótipos de reaproveitamento de água e energia solar para a comunidade.",
    texto: "No último sábado, o pátio do colégio recebeu a 6ª edição da Feira de Ciências, com 30 projetos inscritos pelos alunos do 8º e 9º ano do ensino fundamental. Entre os destaques, um sistema simples de reaproveitamento de água da chuva para regar a horta escolar e uma maquete de captação de energia solar feita com materiais recicláveis. Os projetos foram avaliados por uma banca formada por professores de Ciências, Matemática e um convidado da área de engenharia ambiental. Os três primeiros colocados vão representar a escola na mostra regional de ciências, marcada para o próximo mês.",
    data: "22 ago 2026",
    autor: "Equipe do blog"
  },
  {
    categoria: "Esporte",
    titulo: "Vôlei feminino conquista o campeonato regional",
    resumo: "Time do Enira Moraes Ribeiro venceu a final por 3 sets a 1 e garantiu vaga na etapa estadual.",
    texto: "A equipe de vôlei feminino do colégio venceu a decisão do campeonato regional escolar por 3 sets a 1, contra a equipe do Colégio Municipal Vila Nova. A partida, disputada no ginásio municipal, teve a arquibancada lotada de alunos e familiares torcendo pelo time. Com o título, a equipe garante vaga na etapa estadual dos jogos escolares, que acontece no início do próximo semestre. A técnica do time destacou o trabalho de base feito nos treinos de contraturno ao longo do ano.",
    data: "18 ago 2026",
    autor: "Equipe do blog"
  },
  {
    categoria: "Infraestrutura",
    titulo: "Novo laboratório de informática é inaugurado",
    resumo: "Espaço conta com 25 computadores novos e vai atender turmas de todos os turnos, incluindo os cursos técnicos.",
    texto: "Depois de meses de reforma, o colégio inaugurou seu novo laboratório de informática, equipado com 25 computadores, projetor e internet de banda larga. O espaço vai ser usado tanto nas aulas regulares de tecnologia quanto nas disciplinas técnicas dos cursos profissionalizantes oferecidos no turno da noite. A direção informou que o laboratório antigo será mantido como sala de apoio para reforço escolar. A expectativa é que o novo espaço amplie o acesso dos alunos a ferramentas digitais dentro e fora do horário de aula.",
    data: "12 ago 2026",
    autor: "Equipe do blog"
  },
  {
    categoria: "Comunidade",
    titulo: "Semana das Profissões terá palestras com ex-alunos",
    resumo: "Evento de três dias recebe profissionais formados no colégio para falar sobre suas trajetórias com os estudantes do ensino médio.",
    texto: "A tradicional Semana das Profissões volta a acontecer neste ano com uma novidade: quase metade dos palestrantes confirmados são ex-alunos do próprio colégio, hoje atuando em áreas como enfermagem, mecânica industrial, direito e design. A programação inclui rodas de conversa, oficinas práticas e um painel final com perguntas dos estudantes. As inscrições para as oficinas são feitas por turma, diretamente com os professores de cada disciplina.",
    data: "05 ago 2026",
    autor: "Equipe do blog"
  },
  {
    categoria: "Meio ambiente",
    titulo: "Horta escolar completa um ano com colheita recorde",
    resumo: "Projeto mantido pelos alunos do fundamental já abastece parte da merenda escolar com hortaliças frescas.",
    texto: "A horta escolar, cuidada semanalmente pelos alunos do 6º ao 9º ano em parceria com o setor de merenda, celebrou um ano de atividades com a maior colheita já registrada: mais de 80 quilos de alface, couve e temperos em um único mês. Parte da produção é usada diretamente na cozinha da escola, e o excedente é doado a famílias da comunidade em parceria com a associação de bairro. O projeto também é usado como ferramenta pedagógica nas aulas de Ciências e Geografia.",
    data: "29 jul 2026",
    autor: "Equipe do blog"
  },
  {
    categoria: "Estudantil",
    titulo: "Grêmio Estudantil abre inscrições para nova gestão",
    resumo: "Chapas interessadas em concorrer podem se inscrever na secretaria até o dia 10 de setembro.",
    texto: "Está aberto o período de inscrição de chapas para a eleição do Grêmio Estudantil do colégio. Podem se candidatar alunos regularmente matriculados do 7º ano em diante, reunidos em chapas de no mínimo quatro integrantes. As chapas inscritas terão direito a um espaço de campanha no pátio na semana anterior à votação, que será feita por urna eletrônica com o apoio da turma de informática. O mandato da nova gestão tem duração de um ano.",
    data: "20 jul 2026",
    autor: "Equipe do blog"
  }
];

function criarCartaoNoticia(noticia, indice) {
  const artigo = document.createElement("article");
  artigo.className = "cartao-noticia";
  artigo.innerHTML = `
    <div class="faixa"></div>
    <div class="cartao-corpo">
      <span class="categoria">${noticia.categoria}</span>
      <h3>${noticia.titulo}</h3>
      <p>${noticia.resumo}</p>
      <span class="meta"><span>${noticia.data}</span><span>·</span><span>${noticia.autor}</span></span>
      <button class="botao-leitura" data-indice="${indice}">Ler notícia completa</button>
    </div>
  `;
  return artigo;
}

function renderizarNoticias() {
  const grade = document.getElementById("grade-noticias");
  if (!grade) return;
  noticias.forEach((noticia, indice) => {
    grade.appendChild(criarCartaoNoticia(noticia, indice));
  });
}

function configurarModal() {
  const modal = document.getElementById("modalNoticia");
  const botaoFechar = document.getElementById("fecharModal");
  const categoria = document.getElementById("modalCategoria");
  const titulo = document.getElementById("modalTitulo");
  const meta = document.getElementById("modalMeta");
  const texto = document.getElementById("modalTexto");

  document.addEventListener("click", (evento) => {
    const botao = evento.target.closest(".botao-leitura");
    if (!botao) return;
    const noticia = noticias[Number(botao.dataset.indice)];
    if (!noticia) return;
    categoria.textContent = noticia.categoria;
    titulo.textContent = noticia.titulo;
    meta.textContent = `${noticia.data} · ${noticia.autor}`;
    texto.textContent = noticia.texto;
    modal.classList.add("aberto");
    botaoFechar.focus();
  });

  function fechar() {
    modal.classList.remove("aberto");
  }

  botaoFechar.addEventListener("click", fechar);
  modal.addEventListener("click", (evento) => {
    if (evento.target === modal) fechar();
  });
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") fechar();
  });
}

function configurarMenuMobile() {
  const botaoMenu = document.getElementById("botaoMenu");
  const nav = document.getElementById("navPrincipal");
  if (!botaoMenu || !nav) return;

  botaoMenu.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", String(aberto));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("aberto");
      botaoMenu.setAttribute("aria-expanded", "false");
    });
  });
}

function configurarFormularioContato() {
  const formulario = document.getElementById("formularioContato");
  const status = document.getElementById("statusFormulario");
  if (!formulario) return;

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    status.textContent = "Mensagem pronta para envio — conecte este formulário a um serviço de e-mail para recebê-la de verdade (veja o README).";
    formulario.reset();
  });
}

document.getElementById("anoAtual") &&
  (document.getElementById("anoAtual").textContent = new Date().getFullYear());

renderizarNoticias();
configurarModal();
configurarMenuMobile();
configurarFormularioContato();