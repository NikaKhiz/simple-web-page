const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const links = document.querySelector(".header .mobile-list li");
const body = document.body;
burgerMenu.addEventListener("click",function(){
    mobileMenu.classList.toggle("active");
    burgerMenu.classList.toggle("open");
    body.classList.toggle("body-freeze");
}) ;

window.addEventListener("scroll", function(){
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);

});
