import 'jquery';

import { windowParallaxScrolling, setTopPositions } from './js/animation/parallax-scrolling';

$(function () {
  setTopPositions();
  windowParallaxScrolling();
});
