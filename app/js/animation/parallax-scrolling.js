const imageSlider = document.querySelector(".imageContent.imageContent--slider");
const parallaxWrapper = document.querySelector(".parallaxWrapper");
const imageBgTour = document.querySelector(".imageContent.imageContent--tour");
const imageBgNews = document.querySelector(".imageContent.imageContent--news");
const imageBgVideo = document.querySelector(".imageContent.imageContent--video");

const parallaxScroll = () => {
  const posX = window.scrollX;
  const posY = window.scrollY;

  const circle = document.querySelector(".shape.shape--circle");
  const square = document.querySelector(".shape.shape--square");
  const pentagon = document.querySelector(".shape.shape--pentagon");

  translateElem(circle, posX, posY * -0.1);
  translateElem(square, posX, posY * -2.0);
  translateElem(pentagon, posX, posY * .5);

  translateElem(imageBgTour, posX, posY * -0.35);
  translateElem(imageBgNews, posX, posY * -0.25);
  translateElem(imageBgVideo, posX, posY * -0.15);

  // translateElem(parallaxWrapper, posX, posY * -0.5);



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
  steckImagesVertically(imageSlider, parallaxWrapper);

  // steckImagesVertically(imageBgTour, imageBgNews);
  // steckImagesVertically(imageBgNews, imageBgVideo);

  // function resize() {
  //   const img = new Image;
  //   img.src = $(imageSlider).css('background-image').replace("url(", "").replace(")", "").replace("\"", "").replace("\"", "");

  //   const bgHeight = document.body.offsetWidth * img.height / img.width;
  //   $(imageBgTour).css({ 'top': bgHeight} );
  // }

  function resize(elem1, elem2) {
    const img = new Image;
    img.src = $(elem1).css('background-image').replace("url(", "").replace(")", "").replace("\"", "").replace("\"", "");

    const bgHeight = document.body.offsetWidth * img.height / img.width;
    $(elem2).css({ 'margin-top': bgHeight} );
  }

  // window.onresize = resize(imageSlider, imageBgTour); 
  // window.onresize = resize(imageBgTour, imageBgNews); 
  // window.onresize = resize(imageBgNews, imageBgVideo); 
  window.onresize = resize(imageSlider, parallaxWrapper); 
  resize(imageSlider, parallaxWrapper);
  // resize(imageBgTour, imageBgNews);
  // resize(imageBgNews, imageBgVideo);
}


const steckImagesVertically = (elem1, elem2) => {
  const img = new Image;
  img.src = $(elem1).css('background-image').replace("url(", "").replace(")", "").replace("\"", "").replace("\"", "");

  $(img).on('load', function() {
    const bgHeight = document.body.offsetWidth * img.height / img.width;
    
    console.log('bgHeight', bgHeight, elem1, elem2);
    const elem2Top = bgHeight + 'px';

    $(elem2).css({ 'margin-top': elem2Top} );
  });
}