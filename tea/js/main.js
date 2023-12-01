const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuCloseBackground = document.querySelector('.menu--close');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu__list--open');
  menuCloseBackground.classList.toggle('menu--open');
});
menuClose.addEventListener('click', () => {
  menuList.classList.remove('menu__list--open');
  menuCloseBackground.classList.remove('menu--open');
})