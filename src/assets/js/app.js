import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';
import slick from 'slick-carousel/slick/slick.min.js';
import 'lightbox2/dist/js/lightbox.js';

$(document).foundation();

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

// let featuredSlider = $('.ba-single-gallery');
// featuredSlider.slick({
//     arrows:false,
//     dots: true,
//     slide: "a",
//     // appendDots: '.ba-featured-products__dots',
// });

// let singleGallerySlider = $('.ba-single-gallery');

// singleGallerySlider.slick({
//     arrows: false,
//     dots: false,
    
// })

// // galerry thumbs
// const thumbs = $('[data-gallery-thumbs] a')
// thumbs.on('click', function(event){
//     event.preventDefault();
//     let clickedThumnLink = $(this);
//     let clickedThumnIndex = thumbs.index(clickedThumnLink);
//     singleGallerySlider.slick('slickGoTo', clickedThumnIndex);
// });

// singleGallerySlider.on('afterChange', function(event, slick, currentSlide){
//     thumbs.removeClass('active');
//     thumbs.eq(currentSlide).addClass('active');
//   });



//   //plus minus
//   $(function() {

//     (function quantityProducts() {
//       let $quantityArrowMinus = $(".ba-minus");
//       let $quantityArrowPlus = $(".ba-plus");
//       let $quantityNum = $(".ba-num-inp");
  
//       $quantityArrowMinus.click(quantityMinus);
//       $quantityArrowPlus.click(quantityPlus);
  
//       function quantityMinus() {
//         if ($quantityNum.val() > 1) {
//           $quantityNum.val(+$quantityNum.val() - 1);
//         }
//       }
  
//       function quantityPlus() {
//         $quantityNum.val(+$quantityNum.val() + 1);
//       }
//     })();

// });



// //Slickslider haircaut
// $(function(){
//   $('.ba-slider').slick({
//       slide: "img",
//       infinity: false,
//       slidesToScroll: 1,
//       slidesToShow: 1,
//       dots: false,
//       // prevArrow: ".ba-slider__prev",
//       // nextArrow: ".ba-slider__next",
//       // variableWidth: true,
//       // centerMode: true,
//       adaptiveHeight: true,
//            responsive: [
//           {
//               breakpoint: 660,
//               settings: {
//                   arrows: false,
//               }
//             },
//       ],
//   });



//toggle class
// const menuTogle = $('.menu-toggle, .ba-menu-resp');
// const mobNav = $('.ba-menu-adaptive');
// const burg = $('.menu-toggle');
// menuTogle.on('click', () => mobNav.toggleClass('ba-open'));
// menuTogle.on('click', () => burg .toggleClass('ba-click'));


// toggle class v.2
// let sectionMove = $('.section-move');
// $('[data-btn]').on('click', ()=>{
//   sectionMove.toggleClass('open');
// });



//Maps
// $(document).ready(function(){
//   let map;
//   var mapContainer = $('.ba-map')[0];
//   var mapCenter = {lat: 49.5855864, lng: 34.549397};

//       map = new google.maps.Map(mapContainer, {
//           center: mapCenter,
//           zoom: 17,
          
//       });
     
//   var marker = new google.maps.Marker({
//       position: mapCenter,
//       map: map,
//       icon: 'assets/img/marker.png',
     
//   })    
// });