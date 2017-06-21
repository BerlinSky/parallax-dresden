import 'jquery';

$(function () {
  console.log("enjoy parallax");
  animateSectionImage();

  zoomSectionImage();
});

const zoomSectionImage = () => {

  $('.l-contentContainer').scroll(function() {

    const wScroll = $(this).scrollTop();;
    const winHeight = $(window).height();
    const section = $('.js-sectionImage--music');
    const sectionTop = section.offset().top;

    if (winHeight > sectionTop + 100) {
      // console.log(sectionTop, wScroll, winHeight);

      const size = (winHeight - sectionTop) < 100 ? '100% auto' : (wScroll / 100) * Math.PI / 3 + 100  + '%' + ' ' + 'auto';

      section.css({
        'background-size': size
      })
      // 
    }
  })
}

const animateSectionImage = () => {
  // const container = $('.section.sectionImage');

  $('.l-contentContainer').scroll(function() {
    const wScroll = $(this).scrollTop();
   
    const topPos = (wScroll < 100) ? (100 - wScroll) : 0;
    // const size = (wScroll/8) + '%' + ' ' + (wScroll/8) + '%';

    // console.log(wScroll);
    
    const size = wScroll < 100 ? '100% auto' : (wScroll / 100) * Math.PI * 2 + 100  + '%' + ' ' + 'auto';

    // console.log(size);

    $('.sectionImage__overlay').css({
      'top': topPos +'%',
      'background-size': size
    });

  });
}