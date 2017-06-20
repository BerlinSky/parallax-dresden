import 'jquery';

$(function () {
  console.log("enjoy parallax");
  animateSectionImage();
});

const animateSectionImage = () => {
  // const container = $('.section.sectionImage');

  $('.l-contentContainer').scroll(function() {
    const wScroll = $(this).scrollTop();
   
    const topPos = (wScroll < 100) ? (100 - wScroll) : 0;
    const size = (wScroll/8) + '%' + ' ' + (wScroll/8) + '%';

    // console.log(topPos);

    $('.sectionImage__overlay').css({
      'top': topPos +'%',
      'background-size': size
    });

  });
}