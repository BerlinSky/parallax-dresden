const imageSlider = document.querySelector(".imageContent.imageContent--slider");
const imageBgNews = document.querySelector(".imageContent.imageContent--news");

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
  steckImagesVertically(imageSlider, imageBgNews);

  // var img = new Image();
  // img.src = window.getComputedStyle(imageSlider).getPropertyValue("background-image");

  // img.src = window.getComputedStyle(imageSlider).getPropertyValue("background-image").replace(/url\(|\)$/ig, "");

  function resize() {

    console.log("resized");


    const img = new Image;
    img.src = $(imageSlider).css('background-image').replace("url(", "").replace(")", "").replace("\"", "").replace("\"", "");
    // var bgHeight = img.height;
    // var bgHeight  = img.height + 'px';

// const size = $(imageSlider).css('background-size');

 var bgHeight = document.body.offsetWidth * img.height / img.width;
    console.log(bgHeight);

    $(imageBgNews).css({ 'top': bgHeight} );
    
  }
  window.onresize = resize; resize();

}

const steckImagesVertically = (elem1, elem2) => {
  const img = new Image;
  img.src = $(elem1).css('background-image').replace("url(", "").replace(")", "").replace("\"", "").replace("\"", "");

  $(img).on('load', function() {
      // var bgImgWidth = img.width;
      // var bgImgHeight = img.height + "px";

 var bgHeight = document.body.offsetWidth * img.height / img.width;
      
      // console.log("w::"+bgImgWidth+",h::"+bgImgHeight) ;

      $(elem2).css({ 'top': bgHeight} );
  });

  // $(window).on("resize", function () {
  //     // $('body').height($('body').width() * img.height / img.width);
  //     var bgImgHeight = img.height;
  //     $(elem2).css({ 'top': bgImgHeight} );
  // }).resize();
  
}