const imageSlider = document.querySelector(".imageContent.imageContent--slider");
const imageBgNews = document.querySelector(".imageContent.imageContent--news");
const imageBgTour = document.querySelector(".imageContent.imageContent--tour");

const parallaxScroll = () => {
  const posX = window.scrollX;
  const posY = window.scrollY;

  const circle = document.querySelector(".shape.shape--circle");
  const square = document.querySelector(".shape.shape--square");
  const pentagon = document.querySelector(".shape.shape--pentagon");

  translateElem(circle, posX, posY * -0.1);
  translateElem(square, posX, posY * -2.0);
  translateElem(pentagon, posX, posY * .5);

  translateElem(imageBgNews, posX, posY * -0.5);
  translateElem(imageBgTour, posX, posY * -0.5);

  requestAnimationFrame(parallaxScroll);
}

const translateElem = (elem, posX, posY) => {
  elem.style.transform = ` translate3d(${posX}px, ${posY}px, 0)`;
}

export const windowParallaxScrolling = () => {
  window.addEventListener("DOMContentLoaded", parallaxScroll, false);
  requestAnimationFrame(parallaxScroll);
}

export const setTopPositions = () => {
  steckImagesVertically(imageSlider, imageBgTour);
  steckImagesVertically(imageBgTour, imageBgNews);

  function resize() {
    const img = new Image;
    img.src = $(imageSlider).css('background-image').replace("url(", "").replace(")", "").replace("\"", "").replace("\"", "");

    const bgHeight = document.body.offsetWidth * img.height / img.width;
    $(imageBgTour).css({ 'top': bgHeight} );
  }

  window.onresize = resize; 
  resize();
}

const steckImagesVertically = (elem1, elem2) => {
  const img = new Image;
  img.src = $(elem1).css('background-image').replace("url(", "").replace(")", "").replace("\"", "").replace("\"", "");

  $(img).on('load', function() {
    const bgHeight = document.body.offsetWidth * img.height / img.width;
    $(elem2).css({ 'top': bgHeight} );
  });
}