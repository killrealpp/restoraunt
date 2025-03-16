export function toggleClassOnClick(selector, toggleClass){
    document.addEventListener("DOMContentLoaded", function(){
        document.querySelectorAll(selector).forEach(element =>{
            element.addEventListener("click", function(){
                element.classList.toggle(toggleClass)
            })
        })
    })
}

toggleClassOnClick('.dishes__cart-heart', 'heart-active')
toggleClassOnClick('.rest__cart-book', 'book-active')
toggleClassOnClick('.dishes__cart-plus', 'book-active')