const toggleBtn = document.querySelector('.button-burger');
const mainNav = document.querySelector('.main-nav');

document.querySelector('html').classList.remove('no-js');

toggleBtn.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--opened');
});
