// Lista de scripts a serem carregados
const scripts = [
    'static/MudarTema.js', // Caminho para o primeiro script
    'static/MoverHeader.js'  // Caminho para o segundo script
];

// Função para carregar os scripts
function carregarScripts() {
    scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true; // Carrega os scripts de forma assíncrona
        document.head.appendChild(script);
    });
}

// Chama a função para carregar os scripts
carregarScripts();