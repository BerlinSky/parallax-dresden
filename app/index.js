import 'jquery';

import { windowScrolling } from './js/animation/scrolling';

$(function () {
   window.addEventListener("scroll", windowScrolling, false);
});