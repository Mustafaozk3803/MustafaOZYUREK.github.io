document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarMenu = document.querySelector('.navbar .menu');

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
});
// Sélectionnez votre navbar
const navbar = document.getElementById('navbar');
let lastScrollTop = 0; // Variable pour enregistrer la position précédente du défilement

// Fonction pour gérer le comportement de la navbar lors du défilement
window.addEventListener("scroll", function(){
   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

   if (scrollTop > lastScrollTop) {
       // Descendre - masquer la navbar
       navbar.classList.add('navbar-hidden');
   } else {
       // Remonter - montrer la navbar
       navbar.classList.remove('navbar-hidden');
   }
   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Pour gérer les comportements extrêmes
}, false);
