(function () {

    const swiperCart = new Swiper('.swiper-container--cart', {
        spaceBetween: 15,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    let scrollPos = window.scrollY;

    const stickyBlock = document.querySelector('.js-sticky-block');
    const stickyContainer = document.querySelector('.js-sticky-container');
    let stickyBlockTop = stickyBlock.getBoundingClientRect().top + scrollPos;
    let stickyBlockBottom = stickyBlock.getBoundingClientRect().top + stickyBlock.offsetHeight + scrollPos;
    let stickyBlockLeft = stickyContainer.getBoundingClientRect().left;
    let stickyBlockWidth = stickyContainer.offsetWidth;

    let stickyTopStop = stickyContainer.getBoundingClientRect().top + scrollPos;
    let stickyBotStop = stickyContainer.getBoundingClientRect().top + stickyContainer.offsetHeight + scrollPos;

    if (window.innerWidth >= 1240) {
        window.onscroll = () => {
            scrollPos = window.scrollY;
            stickyBlockTop = stickyBlock.getBoundingClientRect().top + scrollPos;
            stickyBlockBottom = stickyBlock.getBoundingClientRect().top + stickyBlock.offsetHeight + scrollPos;
            stickyBlockLeft = stickyContainer.getBoundingClientRect().left;
            stickyBlockWidth = stickyContainer.offsetWidth;

            stickyTopStop = stickyContainer.getBoundingClientRect().top + scrollPos;
            stickyBotStop = stickyContainer.getBoundingClientRect().top + stickyContainer.offsetHeight + scrollPos;

            stickyBlock.style.width = stickyBlockWidth + 'px';

            if (scrollPos >= stickyTopStop && scrollPos + stickyBlock.offsetHeight <= stickyBotStop) {
                stickyBlock.classList.add('fixed');
                stickyBlock.classList.remove('abs');
            } else if (scrollPos >= stickyTopStop && scrollPos + stickyBlock.offsetHeight >= stickyBotStop) {
                stickyBlock.classList.add('abs');
                stickyBlock.classList.remove('fixed');
            } else {
                stickyBlock.classList.remove('abs');
                stickyBlock.classList.remove('fixed');

            }
        }
    } else {
        stickyBlock.classList.remove('abs');
        stickyBlock.classList.remove('fixed');
    }

})();