import 'jquery';

$(function () {
  animateHeaderBox();
  animatePhotoGallery();
});

const animateHeaderBox = () => {
  $(window).scroll(function() {
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
}

const animatePhotoGallery = () => {
  $(window).scroll(function() {
    const wScroll = $(this).scrollTop();

    // if(wScroll > $('.photoGallery__photoFrame').offset().top - ($(window).height() / 2)) {
    if(wScroll > $('.photoGallery__photoFrame').offset().top - 350) {
      $('.photoGallery__photo').each(function(i) {
        setTimeout(function(){
          $('.photoGallery__photo').eq(i).addClass('photoGallery__photo--show');
        }, 175 * ( i + 1.5 ));
      });
    }
  })
}
