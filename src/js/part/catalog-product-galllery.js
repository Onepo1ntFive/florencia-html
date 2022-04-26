(function () {

    var galleryTop = new Swiper('.swiper-container--gallery', {
        spaceBetween: 30,
        loop: true,
        loopedSlides: 10,
        slidesPerView: 1,
    });

    var galleryThumbs = new Swiper('.swiper-container--gallery-nav', {
        spaceBetween: 10,
        direction: 'vertical',
        // centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                direction: 'horizontal',
                slidesPerView: 4,
            },
            500: {
                slidesPerView: 5,
            },
            768: {
                direction: 'vertical',
                slidesPerView: 6,
            }
        }
    });


    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;

})();