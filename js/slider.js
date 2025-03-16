export function getWidthElement(el) {
    return el.offsetWidth;
}

export function initProgressBarAndSwiper() {
    const span = document.querySelector('#span');
    const sumElement = document.querySelector('#control');
    const maxValue = 100;

    if (sumElement) {
        const sumValue = parseFloat(sumElement.textContent.replace('$', ''));
        const widthPercent = (sumValue / maxValue) * 100;
        span.style.width = widthPercent + '%';
    }

    const marginSwiper = 46;

    function setWidthProgresBar() {
        const activeSlide = document.querySelector('.swiper-slide.swiper-slide-active');
        const container = document.querySelector('.slider .container');
        const scrollbar = document.querySelector('.swiper-scrollbar.swiper-scrollbar-horizontal');

        if (activeSlide && container && scrollbar) {
            const activeWidth = getWidthElement(activeSlide);
            const containerWidth = getWidthElement(container);

            const scrollbarWidth = containerWidth - activeWidth - marginSwiper;
            scrollbar.style.width = scrollbarWidth + 'px';
        }
    }

    function initSwiper() {
        const swiper = new Swiper('.swiper--bundle', {
            spaceBetween: marginSwiper,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    }

    window.addEventListener('resize', setWidthProgresBar);

    initSwiper();
    setWidthProgresBar();
}

initProgressBarAndSwiper();