import 'jquery';

import { windowParallaxScrolling } from './js/animation/parallax-scrolling';
// import { windowScrolling } from './js/animation/scrolling';

$(function () {
  windowParallaxScrolling();
});

// const parallaxScroll = () => {
//   const posX = window.scrollX;
//   const posY = window.scrollY;

//   const circle = document.querySelector(".shape.shape--circle");
//   const square = document.querySelector(".shape.shape--square");
//   const pentagon = document.querySelector(".shape.shape--pentagon");

//   translateElem(circle, posX, posY * -0.1);
//   translateElem(square, posX, posY * -2.0);
//   translateElem(pentagon, posX, posY * .5);

//   requestAnimationFrame(parallaxScroll);
// }

// const translateElem = (elem, posX, posY) => {
//   elem.style.transform = ` translate3d(${posX}px, ${posY}px, 0)`;
// }

// export const windowParallaxScrolling = () => {
//   window.addEventListener("DOMContentLoaded", parallaxScroll, false);
//   requestAnimationFrame(parallaxScroll);
// }