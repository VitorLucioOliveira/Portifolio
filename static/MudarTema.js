

const botao_tema = document.querySelector('.botao_tema');
const tema = document.querySelector('.titulo');
const botao_dowload = document.querySelector('.botao_download');
const seta = document.querySelector('.seta');
const paragrafo = document.querySelector('.paragrafo_descricao');

botao_tema.addEventListener('click', () => {
    document.body.classList.toggle('light');
    tema.classList.toggle('light');
    seta.classList.toggle('light_seta');
    paragrafo.classList.toggle('paragrafo_descricao_light');
   
   
});