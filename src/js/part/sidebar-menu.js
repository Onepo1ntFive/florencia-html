(function () {

    let windowWidth = window.innerWidth

    const body = document.querySelector('body');
    let clickedEl = null;

    // regular sidebar
    const showSidebarBtns = document.querySelectorAll('.js-sidebar-show');
    const hideSidebarBtns = document.querySelectorAll('.js-sidebar-hide');
    const sidebar = document.querySelector('.js-sidebar');
    const sidebarBg = document.querySelector('.js-sidebar-bg');

    Array.prototype.forEach.call(showSidebarBtns, function (showSidebarBtn, i) {
        showSidebarBtn.addEventListener('click', (event) => {
            event.preventDefault();
            clickedEl = showSidebarBtn;
            showSidebar(sidebar, sidebarBg);
        });
    });
    Array.prototype.forEach.call(hideSidebarBtns, function (hideSidebarBtn, i) {
        hideSidebarBtn.addEventListener('click', (event) => {
            event.preventDefault();
            hideSidebar(sidebar, sidebarBg);
        });
    });

    // cart sidebar
    const showSidebarCartBtns = document.querySelectorAll('.js-sidebar-cart-show');
    const hideSidebarCartBtns = document.querySelectorAll('.js-sidebar-cart-hide');
    const sidebarCart = document.querySelector('.js-sidebar-cart');
    const sidebarCartBg = document.querySelector('.js-sidebar-cart-bg');

    Array.prototype.forEach.call(showSidebarCartBtns, function (showSidebarCartBtn, i) {
        showSidebarCartBtn.addEventListener('click', (event) => {
            event.preventDefault();
            clickedEl = showSidebarCartBtn;
            showSidebar(sidebarCart, sidebarCartBg);
        });
    });
    Array.prototype.forEach.call(hideSidebarCartBtns, function (hideSidebarCartBtn, i) {
        hideSidebarCartBtn.addEventListener('click', (event) => {
            event.preventDefault();
            hideSidebar(sidebarCart, sidebarCartBg);
        });
    });

    function showSidebar(block, blockBg) {
        block.classList.add('active');
        blockBg.classList.add('active');
        if (!!clickedEl) {
            clickedEl.classList.add('active');
        }
        body.classList.add('ov-h');
        compensateScrollBar();
    }
    function hideSidebar(block, blockBg) {
        block.classList.remove('active');
        blockBg.classList.remove('active');
        if (!!clickedEl) {
            clickedEl.classList.remove('active');
        }
        body.classList.remove('ov-h');
        compensateScrollBar();
    }
    function compensateScrollBar() {
        let body = document.querySelector('body');
        let scrollbarWidth = getScrollbarWidth();

        body.style.marginRight = (body.classList.contains('ov-h')) ? `${scrollbarWidth}px` : '0px';
    }
    function getScrollbarWidth() {
        // Creating invisible container
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll'; // forcing scrollbar to appear
        outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
        document.body.appendChild(outer);

        // Creating inner element and placing it in the container
        const inner = document.createElement('div');
        outer.appendChild(inner);

        // Calculating difference between container's full width and the child width
        const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

        // Removing temporary elements from the DOM
        outer.parentNode.removeChild(outer);

        return scrollbarWidth;
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