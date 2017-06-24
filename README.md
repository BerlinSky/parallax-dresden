## Set up a page wrapper

### Set up touch-enabled carousel 
1. In stall 
  ```
  npm: npm install --save owl.carousel
  ```
2. Set up 
2.a - Update webpack.config.js
  ```
    const providerPlugin = new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    "window.jQuery" : "jquery"
  })
  ```
2.b Create a JS file carousel.js 
  ```
  import 'owl.carousel/dist/assets/owl.carousel.css';
  import 'owl.carousel';
  ```
3. Prepare the markup
  ```
  <div class="owl-carousel owl-theme">
    <div> Your Content </div>
    <div> Your Content </div>
    <div> Your Content </div>
    <div> Your Content </div>
    <div> Your Content </div>
    <div> Your Content </div>
    <div> Your Content </div>
  </div>
  ```
4. Invoke the carousel
```
$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});
```



### The page structure
```
body.l-pageParallax 

  .navBar = Page Navigation

  .pageContentWrapper = content

    banner = Site banner

    pageContent = Page content

     contentSection 
     contentSectionImage
     
     contentSection 
     contentSectionImage
     
     contentSection 
     contentSectionImage
     
     contentSection 
     contentSectionImage

    pageFooter = Page footer
```



