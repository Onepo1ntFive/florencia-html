(function () {
    const selects = document.querySelectorAll('.js-select');
    Array.prototype.forEach.call(selects, (select) => {

        let selectBlock = new SlimSelect({
            select: select,
            placeholder: '&nbsp;',
            showSearch: false,
            allowDeselectOption: true,
            // allowDeselect: true,
            // deselectLabel: '&times;'
        })

        if (!!select.value) {
            select.classList.add('active')
        } else {
            select.classList.remove('active')
        }
        select.addEventListener('change', (event) => {
            if (!!event.target.value) {
                event.target.classList.add('active')
            } else { event.target.classList.remove('active') }
        })
    })
})(); 