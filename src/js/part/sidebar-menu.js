(function () {

    let windowWidth = window.innerWidth

    const showSidebarBtns = document.querySelectorAll('.js-sidebar-show');
    const hideSidebarBtns = document.querySelectorAll('.js-sidebar-hide');
    const body = document.querySelector('body');
    let clickedEl = null;

    Array.prototype.forEach.call(showSidebarBtns, function (el, i) {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            clickedEl = el;
            showSidebar();
        });
    });
    Array.prototype.forEach.call(hideSidebarBtns, function (el, i) {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            hideSidebar();
        });
    });

    const sidebar = document.querySelector('.js-sidebar');
    const sidebarBg = document.querySelector('.js-sidebar-bg');

    function showSidebar() {
        windowWidth = window.innerWidth
        if (windowWidth < 1200) {
            sidebar.classList.add('active');
            sidebarBg.classList.add('active');
            clickedEl.classList.add('active');
            body.classList.add('ov-h')
        }
    }
    function hideSidebar() {
        sidebar.classList.remove('active');
        sidebarBg.classList.remove('active');
        clickedEl.classList.remove('active');
        body.classList.remove('ov-h')
    }

    if (document.querySelector('.js-menu-collapse')) {
        let menuCollapseBtns = document.querySelectorAll('.js-menu-collapse');
        let menuCollapseContent = null;

        Array.prototype.forEach.call(menuCollapseBtns, function (menuCollapseBtn, i) {
            menuCollapseBtn.addEventListener('click', (event) => {
                menuCollapseContent = event.target.nextElementSibling;
                menuCollapseBtn.classList.toggle('active')
                slideToggle(menuCollapseContent);
            })
        });
    }

})();