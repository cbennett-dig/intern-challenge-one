const menu = document.querySelector('#mobile-menu');
constmenuLinks = document.querySelector('.items__container')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});