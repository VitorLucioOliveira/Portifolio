import initSwiper from "./initSwiper.js";
const projetos = [
  {
    titulo: "Fokus",
    descricao:
      "Fokus é uma aplicação web para usar o método Pomodoro (técnica de gestão de tempo) que ajuda a aumentar a produtividade e a concentração",
    imagem: "img/projetos/fokus.png",
    link_demo: "https://fokus-i-2-nnht.vercel.app/",
    link_git: "https://github.com/VitorLucioOliveira/FokusI-2",
    tags: ["HTML", "JavaScript", "CSS"],
  },
  {
    titulo: "Groceries",
    descricao:
      "Groceries permite aos usuários gerenciar uma lista de compras. Realizado para CS50: Introduction to Computer Science",
    imagem: "img/projetos/groceries.png",
    link_demo: "https://groceries-beryl.vercel.app",
    link_git: "https://github.com/VitorLucioOliveira/Groceries",
    tags: ["Python", "Flask", "SQL", "HTML"],
  },
  {
    titulo: "AluraBooks",
    descricao: "AluraBooks é uma página feita para compra de livros. ",
    imagem: "img/projetos/alura_books.png",
    link_demo: "https://alura-books-kuz1.vercel.app",
    link_git: "https://github.com/VitorLucioOliveira/AluraBooks",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    titulo: "CodeConnect",
    descricao:
      "CodeConnect é uma página web que simula o envio de formulários para a plataforma homônima, utilizando HTML, CSS e JavaScript. Através dela, o usuário pode enviar uma imagem, nome, descrição e tags personalizadas de um projeto.",
    imagem: "img/projetos/code_connect.png",
    link_demo: "https://code-connect-alura.vercel.app",
    link_git: "https://github.com/VitorLucioOliveira/CodeConnect-Alura",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    titulo: "Lista de Compras",
    descricao:
      "Lista de Compras é uma página web que utiliza JavaScript para permitir aos usuários gerenciar uma lista de compras.",
    imagem: "img/projetos/lista_compras.png",
    link_demo: "https://lista-de-compras-cyan-delta.vercel.app",
    link_git: "https://github.com/VitorLucioOliveira/Lista-de-Compras",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    titulo: "Alura+",
    descricao:
      "Alura+ é uma página feita para simular uma propaganda de assinatura da plataforma Alura.",
    imagem: "img/projetos/alura_mais.png",
    link_demo: "https://alura-mais-six.vercel.app",
    link_git: "https://github.com/VitorLucioOliveira/alura_mais",
    tags: ["HTML", "CSS"],
  },

  {
    titulo: "JogoTeca",
    descricao:
      "Jogoteca permite que os usuários façam login para acessar um sistema de cadastro de jogos.  A aplicação organiza e exibe esses jogos de forma simples e eficiente",
    imagem: "img/projetos/jogo_teca.png",
    link_demo: "https://jogo-teca.vercel.app",
    link_git: "https://github.com/VitorLucioOliveira/JogoTeca",
    tags: ["Python", "Flask", "SQL", "HTML", "CSS"],
  },
];

const certificados = [
  {
    titulo: "CS50: Introduction to Computer Science | Harvard University",
    imagem: "img/certificados/CS50x.png",
  },
  {
    titulo: "Potência Tech iFood - Programação do Zero | Dio",
    imagem: "img/certificados/ifood.png",
  },
  {
    titulo:
      "Algoritmos e Programação Orientada a Objetos Swif | Instituto de Pesquisas Eldorado",
    imagem: "img/certificados/hackatruck.png",
  },
  {
    titulo: "HTML, CSS e JavaScript para Projetos Web | Alura",
    imagem: "img/certificados/HTML_CSS_JS.png",
  },
  {
    titulo: "Masterclass de Excel na Prática | Academia BePro",
    imagem: "img/certificados/excel.png",
  },
  {
    titulo: "HTML e CSS para Projetos Web | Alura",
    imagem: "img/certificados/HTML_CSS.png",
  },
  {
    titulo: "Flask: crie uma webapp com Python| Alura",
    imagem: "img/certificados/python_flask.png",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const containerCertificados = document.getElementById("certificados");
  const containerProjetos = document.getElementById("projetos");

  if (!containerCertificados) {
    console.error("Elemento #certificados não encontrado!");
    return;
  }

  // Adiciona certificados dinamicamente
  certificados.forEach((certificado) => {
    const certificadoItem = document.createElement("div");
    certificadoItem.classList.add("certificado-item", "swiper-slide");

    certificadoItem.innerHTML = `
            <img src="${certificado.imagem}" alt="${certificado.titulo}" class="certificado-img">
            <div class="certificado-conteudo">
                <h3 class="certificado-titulo">${certificado.titulo}</h3>
            </div>
        `;

    containerCertificados.appendChild(certificadoItem);
  });

  projetos.forEach((projeto) => {
    const projetoItem = document.createElement("div");
    projetoItem.classList.add("projeto-item", "swiper-slide");

    projetoItem.innerHTML = `
        <img src="${projeto.imagem}" alt="${projeto.titulo}" class="projeto-img">
        <div class="projeto-conteudo">
            <h3 class="projeto-titulo">${projeto.titulo}</h3>
            <p class="projeto-descricao">${projeto.descricao}</p>
            <div class="projeto-links">
                <a href="${projeto.link_git}" target="_blank" rel="noopener noreferrer" class="projeto-link">Repositório</a>
                <a href="${projeto.link_demo}" target="_blank" rel="noopener noreferrer" class="projeto-link">Demo</a>
            </div>
            <div class="projeto-tags">
                ${projeto.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
            </div>
        </div>
    `;

    containerProjetos.appendChild(projetoItem);
});

  // Aguarde um curto período para garantir que o DOM foi atualizado
  setTimeout(() => {
    initSwiper();
  }, 100);
});
