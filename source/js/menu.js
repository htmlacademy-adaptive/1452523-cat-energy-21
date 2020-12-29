const toggleBtn = document.querySelector('.button-burger');
const mainNav = document.querySelector('.main-nav--opened');

document.querySelector('html').classList.remove('main-nav--nojs');

toggleBtn.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--closed');
});
