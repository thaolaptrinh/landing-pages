const headerMenu = document.querySelector('.header__menu');
const headerToggle = document.querySelector('.header__bar');

const toggleMenu = (event) => {
    if(event.target === headerToggle || !headerMenu.contains(event.target)) {
        headerMenu.classList.toggle('mobile-show');   
    }
}

window.addEventListener('click', toggleMenu)