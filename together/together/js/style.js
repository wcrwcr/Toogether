 $(document).ready(function () {
     $("#owl-carousel").owlCarousel({
         loop: true,
         nav: false,
         dots: true,
         items: 1,
         autoplay: false
     });
     $("div.owl-prev").empty()
     $("div.owl-next").empty()
 });

 $(document).ready(function () {
     $("#owl-carousel-b").owlCarousel({
         loop: true,
         navigation: false,
         dots: true,
         items: 1,
         autoplay: false
     });
     $("div.owl-prev").empty()
     $("div.owl-next").empty()
 });

 $(function () {
     $(window).scroll(function () {
         var top = $(document).scrollTop();
         if (top < 700) $(".navigation").css({
             top: '0',
             position: 'relative'
         });
         else $(".navigation").css({
             top: '53px',
             position: 'fixed'
         });
     });
 });

 jQuery(window).load(function () {
     jQuery('#masonry-cont').masonry({
         columnWidth: 242,
         itemSelector: '.box, .item'
     });
 }); //загрузка картинок перед загрузкой масонри

 $(document).ready(function () {
     $('.masonry-cont').masonry({
         itemSelector: '.item',
         singleMode: false,
         isResizable: true,
         isAnimated: false,
         // анимируем перестроение блоков
         animationOptions: {
             queue: false,
             duration: 500
         }
     });
 });

 $(document).ready(function () {
     $('.masonry-cont-b').masonry({
         itemSelector: '.item-a',
         singleMode: false,
         isResizable: true,
         isAnimated: false,
         // анимируем перестроение блоков
         animationOptions: {
             queue: false,
             duration: 500
         }
     });
 });
 $(document).ready(function () {
     $('#simple-menu').sidr({
         side: 'right'
     });
 });
