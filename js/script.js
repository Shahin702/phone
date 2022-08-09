var menu = document.querySelector(".navbar")
var hambarg = document.querySelector(".hambarg")
hambarg.addEventListener("click", function(){
    menu.classList.toggle("active")
    hambarg.classList.toggle("active")
})