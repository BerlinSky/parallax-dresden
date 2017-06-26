const hideMenu = (e) => { 
  const flyoutMenu = document.querySelector('.flyoutMenu');
  flyoutMenu.classList.remove('show');
  e.stopPropagation();

  document.body.style.overflowY = "auto";
}

const showMenu = (e) => {
  const flyoutMenu = document.querySelector('.flyoutMenu');
  flyoutMenu.classList.add('show');
  e.stopPropagation();

  document.body.style.overflowY = "hidden";
}

const menuButtonShow = document.querySelector('.js-menuButton-show');
const menuButtonHide = document.querySelector('.js-menuButton-hide');

export const handleMobileMenu = () => {
  menuButtonShow.addEventListener('click', showMenu, false);
  menuButtonHide.addEventListener('click', hideMenu, false);
}