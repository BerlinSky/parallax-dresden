import 'jquery';

$(function () {
  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /8 +'%)'
    });

  });
});

