export function toggleClassOnClick(selector, toggleClass){
    document.addEventListener("DOMContentLoaded", function(){
        document.querySelectorAll(selector).forEach(element =>{
            element.addEventListener("click", function(){
                element.classList.toggle(toggleClass)
            })
        })
    })
}
