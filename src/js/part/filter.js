(function () {

    //range
    if (document.querySelector('.js-range')) {
        let slidersSelector = document.querySelectorAll('.js-range');
        Array.prototype.forEach.call(slidersSelector, function (sliderSelector) {

            let sliderSlider = sliderSelector.querySelector('.js-range-slider');
            let sliderSliderMinInput = sliderSelector.querySelector('.js-range-min');
            let sliderSliderMsxInput = sliderSelector.querySelector('.js-range-max');

            noUiSlider.create(sliderSlider, {
                start: [15000, 55999],
                step: 100,
                connect: true,
                format: wNumb({
                    decimals: 0,
                }),
                range: {
                    'min': [0],
                    'max': [100000]
                }
            });

            const snapValues = [
                sliderSliderMinInput,
                sliderSliderMsxInput
            ];
            sliderSlider.noUiSlider.on('update', function (values, handle) {
                snapValues[handle].value = values[handle];
            });

            sliderSliderMinInput.addEventListener('change', function () {
                sliderSlider.noUiSlider.set([this.value, null]);
            });
            sliderSliderMsxInput.addEventListener('change', function () {
                sliderSlider.noUiSlider.set([null, this.value]);
            });
        });
    }

    // collapse
    let windowWidth = window.innerWidth;
    if (document.querySelector('.js-collapse-title') && windowWidth < 1200) {
        let collapseTitle = document.querySelectorAll('.js-collapse-title');
        Array.prototype.forEach.call(collapseTitle, function (el, i) {
            let collapseContent = el.nextElementSibling;
            el.addEventListener('click', () => {
                el.classList.toggle('inactive');
                slideToggle(collapseContent, 300)
            });

        });
    }

})();