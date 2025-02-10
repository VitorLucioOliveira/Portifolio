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
        titulo: "Algoritmos e Programação Orientada a Objetos Swif | Instituto de Pesquisas Eldorado",
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

    // Aguarde um curto período para garantir que o DOM foi atualizado
    setTimeout(() => {
        if (window.mySwiper) {
            window.mySwiper.destroy(true, true); // Destrói o Swiper existente para evitar duplicações
        }

        window.mySwiper = new Swiper(".swiper", {
            slidesPerView: 4,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }, 100);
});

