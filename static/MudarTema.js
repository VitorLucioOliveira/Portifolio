

const botao_tema = document.querySelector('.botao_tema');
const tema = document.querySelector('.titulo');
const botao_dowload = document.querySelector('.botao_download');
const seta = document.querySelector('.seta');
const paragrafo = document.querySelector('.paragrafo_descricao');
const titulo_projetos = document.querySelector('.titulo_projetos');
const titulo_certificados = document.querySelector('.titulo_certificados');
const icones_contato = document.querySelectorAll('.icone-contato');

botao_tema.addEventListener('click', () => {
    document.body.classList.toggle('light');
    tema.classList.toggle('light');
    seta.classList.toggle('light_seta');
    paragrafo.classList.toggle('paragrafo_descricao_light');
    titulo_projetos.classList.toggle('titulo_tela_light');
    titulo_certificados.classList.toggle('titulo_tela_light');
    botao_dowload.classList.toggle('botao_download_light');
    
    icones_contato.forEach(icone => {
        icone.classList.toggle('icone-contato_light');
    });
   
});