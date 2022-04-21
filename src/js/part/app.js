(function () {
    // footer menu
    if (document.querySelector('.js-footer-menu-title')) {
        let thisItem = null;
        let thisContent = null;
        let footerMenuTitles = document.querySelectorAll('.js-footer-menu-title');
        Array.prototype.forEach.call(footerMenuTitles, (footerMenuTitle) => {
            footerMenuTitle.addEventListener('click', (event) => { 
                event.preventDefault();
                thisItem = event.target;
                thisContent = thisItem.nextElementSibling;

                thisItem.classList.toggle('active');
                slideToggle(thisContent);
            })
        })
    }
})();