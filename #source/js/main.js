//@prepros-append script.js
//@prepros-append inputrange.js


   function ibg() {
      $.each($(".ibg"), function (index, val) {
         if ($(this).find("img").length > 0) {
            $(this).css(
               "background-image",
               'url("' + $(this).find("img").attr("src") + '")'
            );
         }
      });
   }

   ibg();

   $('a[href=""]').click(function () {
      return false;
   });

   // ================================================================================

   $(".slider-banner").slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
   });

   $(".products__slider").slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
         {
            breakpoint: 1100,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 830,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   });

   $(".slider-useful").slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   });
// ================================================================================
   $(".slider-product__main").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-product__nav",
	});
	
   $(".slider-product__nav").slick({
      slidesToShow: 3,
      slidesToScroll: false,
      asNavFor: ".slider-product__main",
      dots: false,
      centerMode: true,
      focusOnSelect: true,
   });


	