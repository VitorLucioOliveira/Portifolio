const cabecalho = document.querySelector(".cabecalho");
const scrollTrigger = 50;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollTrigger) {
    cabecalho.classList.add("scrolled");
  } else {
    cabecalho.classList.remove("scrolled");
  }
});
