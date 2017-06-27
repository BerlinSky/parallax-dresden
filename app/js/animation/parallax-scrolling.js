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


const getElemBottom = (elem) => elem.getBoundingClientRect().bottom;

export const windowParallaxScrolling = () => {
  window.addEventListener("DOMContentLoaded", parallaxScroll, false);
  requestAnimationFrame(parallaxScroll);
}


export const setTopPositions = () => {
  const bottom = getElemBottom(imageSlider);
  console.log(bottom);
  // imageBgNew.style.top = bottom + "px";

// var sz = imageSlider.style.backgroundSize;
    
//     console.log(sz);


  // const thisElem = $('.imageContent.imageContent--slider');
  getBackgroundImageHeight(imageSlider, imageBgNews);

  // console.log(height);
  // var img = new Image ;
  // var image = new Image;

  // $(image).load(function () {
  //     width  = image.width;
  //     height = image.height;
  // });

  // img.src = $('.imageContent.imageContent--slider').css('background-image').replace("url(", "").replace(")", "").replace("\"", "").replace("\"", "");
  // console.log(img.src);
  
  // $(img).on('load', function() {
  //     var bgImgWidth = img.width;
  //     var bgImgHeight = img.height;
  //     console.log("w::"+bgImgWidth+",h::"+bgImgHeight) ;
  // }) ;

}

const getBackgroundImageHeight = (elem1, elem2) => {
  const img = new Image;
  img.src = $(elem1).css('background-image').replace("url(", "").replace(")", "").replace("\"", "").replace("\"", "");

  $(img).on('load', function() {
      var bgImgWidth = img.width;
      var bgImgHeight = img.height;
      console.log("w::"+bgImgWidth+",h::"+bgImgHeight) ;

      $(elem2).css({ 'top': bgImgHeight} );
  }) ;
}