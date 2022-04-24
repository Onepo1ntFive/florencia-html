(function () {
    const swiperCatalogCarousel = new Swiper('.swiper-container--main', {
        loop: true,
        loopAdditionalSlides: 10,
        watchSlidesVisibility: true,
        spaceBetween: 100,
        parallax: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
        speed: 1000,
        breakpoints: {
            0: {
                spaceBetween: 10,
            },
            768: {
                spaceBetween: 20,
            },
            1200: {
                spaceBetween: 100,
            }
        }
    });
})();