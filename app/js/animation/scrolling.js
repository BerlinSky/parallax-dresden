const winHeight = window.innerHeight;

const elemRect = (el) => el.getBoundingClientRect();

const isVisiblePartially = (winHeight, elemRect) => (elemRect.top + elemRect.height) >= 0  && (elemRect.height + winHeight) >= elemRect.bottom;

const isVisibleFully = (winHeight, elemRect) => elemRect.top >= 0 && elemRect.bottom <= winHeight;

const isElemVisiblePartially = (el) => isVisiblePartially(winHeight, elemRect(el));

const isElemVisibleFully = (el) => isVisibleFully(winHeight, elemRect(el));

export const windowScrolling = () => {

  const elemMedia = document.querySelector('.section.section--media');
  if (isElemVisibleFully(elemMedia)) {
    elemMedia.classList.add('active');
  } 
  else {
    elemMedia.classList.remove('active');
  }

  const elemService = document.querySelector('.section.section--service');
  if (isElemVisiblePartially(elemService)) {
    elemService.classList.add('active');
  }
}