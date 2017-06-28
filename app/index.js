import 'jquery';

import { windowParallaxScrolling, setTopPositions } from './js/animation/parallax-scrolling';

$(function () {
  setTopPositions();
  windowParallaxScrolling();


$('body').bind('scroll mousewheel', function(event) {

if (event.originalEvent.wheelDelta >= 0) {
    console.log('moving down');   
  }
  else {
    console.log('moving up'); 
  }
});

});
