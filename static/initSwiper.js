function initSwiper() {
    if (window.mySwiper) {
        window.mySwiper.destroy(true, true); // Destrói o Swiper existente para evitar duplicações
    }

    window.mySwiper = new Swiper(".swiper", {
        slidesPerView: 1, // Valor padrão para telas menores
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // Quando a tela for maior ou igual a 1200px
            1200: {
                slidesPerView: 4, // Exibe 4 slides
            },
        },
    });
}

export default initSwiper;