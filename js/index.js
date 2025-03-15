const span = document.querySelector('#span')
const sumElement = document.querySelector('#control')
const maxValue = 100

const sumValue = parseFloat(sumElement.textContent.replace('$', ''))

const widthPercent =  (sumValue / maxValue) *100

span.style.width = widthPercent + '%'


const dropdown = document.querySelector('.dropdown');
const button = document.querySelector('.dropdown__btn');
const list = document.querySelector('.dropdown__list');
const items = document.querySelectorAll('.dropdown__list-item'); // исправлено

button.addEventListener('click', function () {
    list.classList.toggle('dropdown__list--visible');
    button.classList.toggle('dropdown__btn--active');
});

items.forEach(item => {
    item.addEventListener('click', function () {
        button.textContent = item.textContent; 
        list.classList.remove('dropdown__list--visible');
    });
});

document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target)) {
        list.classList.remove('dropdown__list--visible');
        button.classList.remove('dropdown__btn--active');
    }
});

const marginSwiper = 46

function getWidthElement(el){
    const width = el.offsetWidth
    return width
}

function setWidthProgresBar(){
    const activeWidth = getWidthElement(document.querySelector('.swiper-slide.swiper-slide-active'))
    console.log(document.querySelector('.swiper-slide.swiper-slide-active'))
    const containerWidth = getWidthElement(document.querySelector('.slider .container'))
    const scrollbar = document.querySelector('.swiper-scrollbar.swiper-scrollbar-horizontal')
    

    const scrollbarWidth = containerWidth - activeWidth - marginSwiper

    scrollbar.style.width = scrollbarWidth + 'px'
    
}





function initSwiper(){
    const swiper = new Swiper('.swiper--bundle',{
        spaceBetween: marginSwiper,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })


}


window.addEventListener('resize', setWidthProgresBar)


initSwiper()
setWidthProgresBar()
