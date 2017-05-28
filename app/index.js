import 'jquery';

$(function () {
  $(window).scroll(function(){

    const wScroll = $(this).scrollTop();

    $('.headerParallaxBox__backBanner').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.headerParallaxBox__middleBanner').css({
      'transform' : 'translate(0px, '+ wScroll /3 +'%)'
    });

    $('.headerParallaxBox__frontBanner').css({
      'transform' : 'translate(0px, -'+ wScroll /9 +'%)'
    });

  });
});

