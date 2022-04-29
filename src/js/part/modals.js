(function () {

    const body = document.querySelector('body');

    if (document.querySelector('.js-modal-show-callback')) {
        const modalCallbackShow = document.querySelector('.js-modal-show-callback');
        const modalCallbackCLoseBtns = document.querySelectorAll('.js-modal-hide-callback');
        const modalCallback = document.querySelector('.js-modal-callback');
        const modalCallbackBg = document.querySelector('.js-modal-callback-bg');

        modalCallbackShow.addEventListener('click', (event) => {
            event.preventDefault();
            showModal(modalCallback, modalCallbackBg);
        })
        Array.prototype.forEach.call(modalCallbackCLoseBtns, (modalCallbackCLose) => {
            modalCallbackCLose.addEventListener('click', (event) => {
                event.preventDefault();
                hideModal(modalCallback, modalCallbackBg);
            })
        })
    }

    if (document.querySelector('.js-modal-show-quick')) {
        const modalQuickShowBtns = document.querySelectorAll('.js-modal-show-quick');
        const modalQuickCLoseBtns = document.querySelectorAll('.js-modal-hide-quick');
        const modalQuick = document.querySelector('.js-modal-quick');
        const modalQuickBg = document.querySelector('.js-modal-quick-bg');

        Array.prototype.forEach.call(modalQuickShowBtns, (modalQuickShow) => {
            modalQuickShow.addEventListener('click', (event) => {
                event.preventDefault();
                showModal(modalQuick, modalQuickBg);
            })
        })
        Array.prototype.forEach.call(modalQuickCLoseBtns, (modalQuickCLose) => {
            modalQuickCLose.addEventListener('click', (event) => {
                event.preventDefault();
                hideModal(modalQuick, modalQuickBg);
            })
        })
    }

    if (document.querySelector('.js-modal-show-review')) {
        const modalReviewShow = document.querySelector('.js-modal-show-review');
        const modalReviewCLoseBtns = document.querySelectorAll('.js-modal-hide-review');
        const modalReview = document.querySelector('.js-modal-review');
        const modalReviewBg = document.querySelector('.js-modal-review-bg');

        modalReviewShow.addEventListener('click', (event) => {
            event.preventDefault();
            showModal(modalReview, modalReviewBg);
        })
        Array.prototype.forEach.call(modalReviewCLoseBtns, (modalReviewCLose) => {
            modalReviewCLose.addEventListener('click', (event) => {
                event.preventDefault();
                hideModal(modalReview, modalReviewBg);
            })
        })
    }

    function showModal(block, blockBg) {
        block.classList.add('active');
        blockBg.classList.add('active');
        body.classList.add('ov-h');
        compensateScrollBar();
    }
    function hideModal(block, blockBg) {
        block.classList.remove('active');
        blockBg.classList.remove('active');
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

})();