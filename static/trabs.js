document.addEventListener('DOMContentLoaded', () => {
    const elementosParaObservar = ['.apresentacao', '.descricao'];
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('mostrar');
        }
      });
    });
  
    elementosParaObservar.forEach(seletor => {
      const elemento = document.querySelector(seletor);
      if (elemento) {
        observer.observe(elemento);
      }
    });
  });
  