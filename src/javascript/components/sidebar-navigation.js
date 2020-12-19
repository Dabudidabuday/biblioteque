
/**
 * Open - close Navigation menu
 */
const navMenu = document.querySelector('.navigation-menu');
const btnNavOpen = document.querySelector('#btn-navigation-open');
const btnNavClose = document.querySelector('#btn-navigation-close');
const overlay = document.querySelector('#overlay');

if(btnNavClose) {
    btnNavClose.addEventListener('click', function() {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    })
}

if(btnNavOpen) {
    btnNavOpen.addEventListener('click', function() {
        navMenu.classList.add('active');
        overlay.classList.add('active');
    })
}