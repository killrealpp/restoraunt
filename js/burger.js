const burgerBtn = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.burger__menu');

export const toggleMenu = () => {
    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        burgerBtn.classList.toggle('active'); // Добавляем класс active к кнопке
    });

    document.addEventListener('click', (event) => {
        if (!burgerMenu.contains(event.target) && !burgerBtn.contains(event.target)) {
            burgerMenu.classList.remove('active');
            burgerBtn.classList.remove('active'); // Убираем класс active при закрытии
        }
    });
};