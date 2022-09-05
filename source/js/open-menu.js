const header = document.querySelector('.header');
const menuButton = document.querySelector('.header__nav-button');
const menu = document.querySelector('.site-list');

const openMenu = () => {
  header.classList.remove('header--nojs');
  menu.classList.remove('site-list--nojs');

  menuButton.addEventListener('click', function () {
    if (header.classList.contains('header--closed') && menu.classList.contains('site-list--closed')) {
      header.classList.remove('header--closed');
      menu.classList.remove('site-list--closed');
      header.classList.add('header--opened');
      menu.classList.add('site-list--opened');
    } else {
      header.classList.add('header--closed');
      menu.classList.add('site-list--closed');
      header.classList.remove('header--opened');
      menu.classList.remove('site-list--opened');
    }
  });
}

export {openMenu};
