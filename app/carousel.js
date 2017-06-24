// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'imports?jQuery!owl.carousel';
import 'owl.carousel';

export const setupCarousel = () => {
  $('.owl-carousel').owlCarousel({ 
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
          nav:true
      },
      // 600:{
      //     items:3,
      //     nav:false
      // },
      // 1000:{
      //     items:5,
      //     nav:true,
      //     loop:false
      // }
    }
  });

  console.log("carousel");

}