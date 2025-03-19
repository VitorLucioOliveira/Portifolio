const cabecalho = document.querySelector(".cabecalho");
const scrollTrigger = 50;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollTrigger) {
    cabecalho.classList.add("scrolled");
  } else {
    cabecalho.classList.remove("scrolled");
  }
});


// Tela Sobre
const sobre = document.getElementById("sobre");
const botao_sobre = document.getElementById("botao_sobre");

botao_sobre.addEventListener("click", (event) => { 
  event.preventDefault();
  sobre.scrollIntoView({behavior: "smooth"});
});


// Tela Projetos
const tela_projetos = document.querySelector(".tela-projetos");
const botao_projetos = document.getElementById("botao_projetos");

botao_projetos.addEventListener("click", (event) => {
  event.preventDefault();
  tela_projetos.scrollIntoView({behavior: "smooth"});
});

// Tela Certificados
const tela_certificados = document.querySelector(".tela-certificados");
const botao_certificados = document.getElementById("botao_certificados");

botao_certificados.addEventListener("click", (event) => {
  event.preventDefault();
  tela_certificados.scrollIntoView({behavior: "smooth"});
});

// Tela Contato
const tela_contato = document.querySelector(".tela-contato");
const botao_contato = document.getElementById("botao_contato");

botao_contato.addEventListener("click", (event) => {
  event.preventDefault();
  tela_contato.scrollIntoView({behavior: "smooth"});
});


// Seleciona o botão de menu e o menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Adiciona um evento de clique ao botão de menu
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna a classe "active" no menu
});

const tela_inicial = document.getElementById("apresentacao");
const botao_arroba = document.getElementById("arroba");

botao_arroba.addEventListener("click", (event) => {
  event.preventDefault();
  tela_inicial.scrollIntoView({behavior: "smooth"});
});