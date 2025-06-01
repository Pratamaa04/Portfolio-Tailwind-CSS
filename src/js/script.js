// Navbar fixed
// window.onscroll = function(){
//     const header = document.querySelector('header');
//     const sticky = header.offsetTop;
//     if(window.pageYOffset > 0){
//         header.classList.add('navbar-fixed');
//     } else {
//         header.classList.remove('navbar-fixed');
//     }
// }

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    console.log("scroll detected");
    if (window.scrollY > 0) {
        header.classList.add("navbar-fixed");
        header.classList.remove("absolute");
    } else {
        header.classList.remove("navbar-fixed");
        header.classList.add("absolute");
    }
});


// hamberger menu

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})