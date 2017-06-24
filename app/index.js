import 'jquery';
import { setupCarousel } from './carousel';

$(function () {
  console.log("enjoy parallax");

  setupCarousel();

  setPageContentWrapperTop();
  setBannerHeight();

  animateSectionImage();

  zoomSectionImage();

  multipleSpeedForSectionImages();

  $( window ).resize(function() {
    setPageContentWrapperTop();
    setBannerHeight();
  });
});



const setPageContentWrapperTop = () => {
  const navBar = $('.js-navBar');
  const navTop = navBar.offset().top;
  const navHeight = navBar.height();
  const wrapper = $('.js-pageContentWrapper');

  wrapper.css({
    'margin-top': navTop + navHeight
  })
}

const setBannerHeight = () => {
    const banner = $('.js-banner');
    const bannerWidth = banner.width();
    const bannerTargetHeight = bannerWidth * 560 / 1440;

    banner.css({
      'height': bannerTargetHeight
    })
}
  

const zoomSectionImage = () => {

  $('.l-contentContainer').scroll(function() {

    const wScroll = $(this).scrollTop();;
    const winHeight = $(window).height();
    const section = $('.js-sectionImage--music');
    const sectionTop = section.offset().top;

    if (winHeight > sectionTop + 100) {
      const size = (winHeight - sectionTop) < 100 ? '100% auto' : (wScroll / 100) * Math.PI / 3 + 100  + '%' + ' ' + 'auto';

      section.css({
        'background-size': size
      })
      // 
    }
  })
}

const animateSectionImage = () => {
  $('.l-contentContainer').scroll(function() {
    const wScroll = $(this).scrollTop();
    const topPos = (wScroll < 100) ? (100 - wScroll) : 0;
    const size = wScroll < 100 ? '100% auto' : (wScroll / 100) * Math.PI * 2 + 100  + '%' + ' ' + 'auto';

    $('.sectionImage__overlay').css({
      'top': topPos +'%',
      'background-size': size
    });

  });
}

const multipleSpeedForSectionImages = () => {

  $('.l-contentContainer').scroll(function() {
    const triggerPoint = $(window).height() - 100;
    const section = $('.sectionImage--videos');
    const sectionTop = section.offset().top;

    if (sectionTop < triggerPoint) {
      const change = 1 + (triggerPoint - sectionTop) / triggerPoint;

      $('.sectionImage__middle ').css({
        'transform': 'scale(' + change + ', ' + change + ')'
      });

      const changePlus = change * 1.25;
      
      $('.sectionImage__top ').css({
        'transform': 'scale(' + changePlus + ', ' + changePlus + ')'
      });
    }
   
  });
}