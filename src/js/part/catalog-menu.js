(function () {
    const menuToggleBtn = document.querySelector('.js-menu-toggle');
    const body = document.querySelector('body');
    const menuBlock = document.querySelector('.menu__submenu');
    const hasChildSecondLevel = document.querySelectorAll('.menu__submenu > .menu__haschild');
    const hasChildThirdLevel = document.querySelectorAll('.menu__submenu-1 > .menu__haschild');
    const menuSubLevel1All = document.querySelectorAll('.menu__submenu-1');
    const menuSubLevel2All = document.querySelectorAll('.menu__submenu-2');

    menuToggleBtn.addEventListener('click', function () {
        menuToggleBtn.parentNode.classList.toggle('active');
        if (menuBlock.classList.contains('menu__submenu--2') || menuBlock.classList.contains('menu__submenu--3')) {
            hasChildSecondLevel.forEach((el, i) => {
                el.classList.remove('active');
            })
            menuSubLevel1All.forEach((menuSubLevel1, i) => {
                menuSubLevel1.classList.remove('active');
            })
            menuSubLevel2All.forEach((menuSubLevel2, i) => {
                menuSubLevel2.classList.remove('active');
            })

            if (menuBlock.classList.contains('menu__submenu--2')) {
                menuBlock.classList.remove('menu__submenu--2');
            }
            if (menuBlock.classList.contains('menu__submenu--3')) {
                menuBlock.classList.remove('menu__submenu--3');
            }
        }
        menuBlock.classList.remove('menu__submenu--2');
        setSubmenuHeight();
    });

    hasChildSecondLevel.forEach((el, i) => {
        let subMenuBtn = el.querySelector('* > ins');
        subMenuBtn.addEventListener('click', function (e) {
            let parentItem = e.target.parentNode.parentNode;
            let listSubItems = parentItem.querySelector('.menu__submenu-1');
            hasChildSecondLevel.forEach((el, i) => {
                el.classList.remove('active');
            })
            hasChildThirdLevel.forEach((el, i) => {
                el.classList.remove('active');
            })
            menuSubLevel1All.forEach((menuSubLevel1, i) => {
                menuSubLevel1.classList.remove('active');
            })
            menuSubLevel2All.forEach((menuSubLevel2, i) => {
                menuSubLevel2.classList.remove('active');
            })
            menuBlock.classList.remove('menu__submenu--3');
            menuBlock.classList.add('menu__submenu--2');
            parentItem.classList.add('active');
            listSubItems.classList.add('active');
            setSubmenuHeight();
        })

    });

    hasChildThirdLevel.forEach((el, i) => {
        let subSubMenuBtn = el.querySelector('* > ins');
        subSubMenuBtn.addEventListener('click', function (e) {
            let parentItem = e.target.parentNode.parentNode;
            let listSubSubItems = document.querySelector(`.${parentItem.dataset.child}`);
            hasChildThirdLevel.forEach((el, i) => {
                el.classList.remove('active');
            })
            menuSubLevel2All.forEach((menuSubLevel2, i) => {
                menuSubLevel2.classList.remove('active');
            })
            menuBlock.classList.remove('menu__submenu--2');
            menuBlock.classList.add('menu__submenu--3');
            parentItem.classList.add('active');
            listSubSubItems.classList.add('active');
            setSubmenuHeight();
        })

    });

    let menuLevel1Height = 0;
    let menuLevel2Height = 0;
    let menuLevel3Height = 0;

    function setSubmenuHeight() {

        if (document.querySelector('.menu__submenu .menu__submenu-2.active')) {
            menuLevel3Height = document.querySelector('.menu__submenu .menu__submenu-2.active').getBoundingClientRect().height;
        } else {
            menuLevel3Height = 0;
        }
        if (document.querySelector('.menu__submenu .menu__submenu-1.active')) {
            menuLevel2Height = document.querySelector('.menu__submenu .menu__submenu-1.active').getBoundingClientRect().height;
        } else {
            menuLevel2Height = 0;
        }
        if (document.querySelector('.menu__item.active .menu__submenu') && menuLevel1Height === 0) {
            menuLevel1Height = document.querySelector('.menu__item.active .menu__submenu').getBoundingClientRect().height;
        }

        console.log(menuLevel1Height, menuLevel2Height, menuLevel3Height);
        menuBlock.style.height = `${Math.max(menuLevel1Height, menuLevel2Height, menuLevel3Height)}px`;
    }
})();