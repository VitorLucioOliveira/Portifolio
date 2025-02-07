

const botao_tema = document.querySelector('.botao_tema');
const tema = document.querySelector('.titulo');
const botao_dowload = document.querySelector('.botao_download');

botao_tema.addEventListener('click', () => {
    document.body.classList.toggle('light');
    tema.classList.toggle('light');
    botao_dowload.classList.toggle('light');
   
});