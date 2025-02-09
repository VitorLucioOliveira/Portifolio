const cabecalho = document.querySelector(".cabecalho");
const scrollTrigger = 50;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollTrigger) {
    cabecalho.classList.add("scrolled");
  } else {
    cabecalho.classList.remove("scrolled");
  }
});


const sobre = document.getElementById("sobre");
const botao_sobre = document.getElementById("botao_sobre");

botao_sobre.addEventListener("click", (event) => { 
  event.preventDefault();
  sobre.scrollIntoView({behavior: "smooth"});
});