var mixer = mixitup('.work-sample-container');

var headerContent = document.querySelector(".header-content")
var navbar = document.querySelector(".menu")
function openbtn(){
    navbar.style.left = "0";
    headerContent.style.display = "none";
}
function closebtn(){
    navbar.style.left = "-100%";
    headerContent.style.display = "block";
}