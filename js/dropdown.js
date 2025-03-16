export function initDropdown() {
    const dropdown = document.querySelector('.dropdown');
    const button = document.querySelector('.dropdown__btn');
    const list = document.querySelector('.dropdown__list');
    const items = document.querySelectorAll('.dropdown__list-item');

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
}
