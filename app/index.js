import 'jquery';

// import { windowScrolling } from './js/animation/scrolling';

$(function () {
   window.addEventListener("scroll", scrollLoop, false);
  //  window.addEventListener("scroll", windowScrolling, false);

  // window.addEventListener("DOMContentLoaded", scrollLoop, false);
});

const scrollLoop = () => {
  const posX = window.scrollX;
  const posY = window.scrollY;

  const circle = document.querySelector(".shape.shape--circle");
  const square = document.querySelector(".shape.shape--square");
  const pentagon = document.querySelector(".shape.shape--pentagon");

  translateElem(circle, posX, posY * -0.2);
  translateElem(square, posX, posY * -1.5);
  translateElem(pentagon, posX, posY * -5);

  // requestAnimationFrame(scrollLoop);
}

const translateElem = (elem, posX, posY) => {
  elem.style.transform = ` translate3d(${posX}px, ${posY}px, 0)`;
}
