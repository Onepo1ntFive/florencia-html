(function () {
    const swiperCatalog = new Swiper('.swiper-container--catalog', {
        spaceBetween: 10,
    pagination: {
            el: '.swiper-pagination',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 75,
            }
        }
    });

})();