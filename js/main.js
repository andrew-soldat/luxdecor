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

/*     burger........
    ==================================*/

$(".header__burger").click(function (event) {
   $(this).toggleClass("active");
   $(".header__icon, .header__nav").toggleClass("active");
   $("body").toggleClass("lock");
});

/*     Navigation........
	 ==================================*/

const navBtn = $("[data-nav]");

$(navBtn).click(function (e) {
   let $this = $(this);
   let navId = $this.data("nav");
   // $(navId).slideToggle('400');
   $(navId).toggleClass("show");
});

// $(document).mouseup(function (e) {
// 	let $this = $(navBtn);
// 	let navId = $this.data('nav');
//    if (!e.target.closest(navBtn) {
//       $(navId).removeClass("show");
//    }
// });

$(document).mouseup(function (e) {
	
   if (!e.target.closest(".top-header__callus, .top-header__requestcall")) {
      $(".top-header__number, .top-header__request").removeClass("show");
   }
});

/*     Modal........
	 ==================================*/

const modalBtn = $("[data-modal]");
const modalClose = $("[data-close]");

$(modalBtn).click(function (e) {
   event.preventDefault();
   let $this = $(this);
   let modalId = $this.data("modal");
   $(modalId).addClass("show");
   $("body").addClass("lock");

   setTimeout(function () {
      $(modalId).find(".modal__wrapper").css({
         transform: "scale(1)",
      });
   }, 200);
});

$(modalClose).click(function (event) {
   let $this = $(this);
   let modalParent = $this.parents(".modal");

   modalParent.find(".modal__wrapper").css({
      transform: "scale(0)",
   });

   setTimeout(function () {
      modalParent.removeClass("show");
      $("body").removeClass("lock");
   }, 200);
});

$(".modal").click(function () {
   let $this = $(this);
   $this.find(".modal__wrapper").css({
      transform: "scale(0)",
   });
   setTimeout(function () {
      $this.removeClass("show");
      $("body").removeClass("lock");
   }, 200);
});

$(".modal__wrapper").click(function (event) {
   event.stopPropagation();
});

$(".top-header__request").click(function (event) {
   event.stopPropagation();
});

$(".top-header__number").click(function (event) {
   event.stopPropagation();
});

// $('[data-modal="#modal-enter]').click(function(event) {
// 	event.preventDefault();
// 	$('[data-modal="#modal-registration]').removeClass('show');
// });

/*     Оплата и доставка........
	 ==================================*/

const list = $(".paydel__li"),
   links = list.find("a");

links.click(function () {
   if (!$(this).hasClass("active")) {
      list.children().removeClass("active");
      $(this).addClass("active");
      $(".paydel__content").toggleClass("active");
   }
});

function toggleTablePay (event) {
	$(".legal").toggleClass("active");
	$(".individuals").toggleClass("active");
	$(".info-pay__individuals").toggleClass("active");
	$(".info-pay__legal").toggleClass("active");
};

$(".individuals").click((e) => toggleTablePay (e));
$(".legal").click((e) => toggleTablePay (e));


/*     Оформление заказа........
	 ==================================*/

function toggleCheckout (event) {
	$(".noregistered").toggleClass("active");
	$(".registered").toggleClass("active");
   $(".form-checkout__noregistered").toggleClass("active");
   $(".form-checkout__registered").toggleClass("active");
};

$(".noregistered").click((e) => toggleCheckout (e));
$(".registered").click((e) => toggleCheckout (e));

/*     Переносим "заказать звонок" в  блок "телефоны"........
	 ==================================*/

const parentOriginal = document.querySelector(".top-header__request");
const parent = document.querySelector(".top-header__number");
const item = document.querySelector(".top-header__btn");

window.addEventListener("resize", function (event) {
   const viewportWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
   );
   if (viewportWidth < 1190) {
      if (!item.classList.contains("done")) {
         parent.insertBefore(item, parent.children[3]);
         item.classList.add("done");
      }
   } else {
      if (item.classList.contains("done")) {
         parentOriginal.insertBefore(item, parentOriginal.children[1]);
         item.classList.add("done");
         item.classList.remove("done");
      }
   }
});

/*     Переносим "корзину" в "верхгий блок"........
	 ==================================*/

const parentOld = document.querySelector(".header__body");
const parentNew = document.querySelector(".top-header");
const cart = document.querySelector(".header__right");

window.addEventListener("resize", function (event) {
   const viewportWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
   );
   if (viewportWidth < 1190) {
      if (!cart.classList.contains("done")) {
         parentNew.insertBefore(cart, parentNew.children["last"]);
         cart.classList.add("done");
      }
   } else {
      if (cart.classList.contains("done")) {
         parentOld.insertBefore(cart, parentOld.children[1]);
         cart.classList.add("done");
         cart.classList.remove("done");
      }
   }
});

/*     Filter products........
	 ==================================*/

const filterBtn = $("[data-filter]");

$(filterBtn).click(function (e) {
   let $this = $(this);
   let filterId = $this.data("filter");
   $(filterId).addClass("show");
   $(this).addClass("hide");
});

/*     Add Filter Column........
	 ==================================*/

function toggleDrawer(event) {
   $(".filter").toggleClass("active");
   $(".filter__overlay").toggleClass("active");
   $("body").toggleClass("lock");
}

$(".filter__button").click((e) => toggleDrawer(e));
$(".filter__close, .filter__overlay ").click((e) => toggleDrawer(e));



$(function () {
	
   /*    Input Range products........
	 ==================================*/

   setTimeout(
      init2slider("id66", "id66b", "id661", "id662", "id66i1", "id66i2"),
      0
   );

   function init2slider(idX, btwX, btn1X, btn2X, input1, input2) {
      var slider = document.getElementById(idX);
      var between = document.getElementById(btwX);
      var button1 = document.getElementById(btn1X);
      var button2 = document.getElementById(btn2X);
      var inpt1 = document.getElementById(input1);
      var inpt2 = document.getElementById(input2);

      var min = inpt1.min;
      var max = inpt1.max;

      /*init*/
      var sliderCoords = getCoords(slider);
      button1.style.marginLeft = "0px";
      button2.style.marginLeft =
         slider.offsetWidth - button1.offsetWidth + "px";
      between.style.width = slider.offsetWidth - button1.offsetWidth + "px";
      inpt1.value = min;
      inpt2.value = max;

      inpt1.onchange = function (evt) {
         if (parseInt(inpt1.value) < min) inpt1.value = min;
         if (parseInt(inpt1.value) > max) inpt1.value = max;
         if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
            var temp = inpt1.value;
            inpt1.value = inpt2.value;
            inpt2.value = temp;
         }

         var sliderCoords = getCoords(slider);
         var per1 = (parseInt(inpt1.value - min) * 100) / (max - min);
         var per2 = (parseInt(inpt2.value - min) * 100) / (max - min);
         var left1 = (per1 * (slider.offsetWidth - button1.offsetWidth)) / 100;
         var left2 = (per2 * (slider.offsetWidth - button1.offsetWidth)) / 100;

         button1.style.marginLeft = left1 + "px";
         button2.style.marginLeft = left2 + "px";

         if (left1 > left2) {
            between.style.width = left1 - left2 + "px";
            between.style.marginLeft = left2 + "px";
         } else {
            between.style.width = left2 - left1 + "px";
            between.style.marginLeft = left1 + "px";
         }
      };
      inpt2.onchange = function (evt) {
         if (parseInt(inpt2.value) < min) inpt2.value = min;
         if (parseInt(inpt2.value) > max) inpt2.value = max;
         if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
            var temp = inpt1.value;
            inpt1.value = inpt2.value;
            inpt2.value = temp;
         }

         var sliderCoords = getCoords(slider);
         var per1 = (parseInt(inpt1.value - min) * 100) / (max - min);
         var per2 = (parseInt(inpt2.value - min) * 100) / (max - min);
         var left1 = (per1 * (slider.offsetWidth - button1.offsetWidth)) / 100;
         var left2 = (per2 * (slider.offsetWidth - button1.offsetWidth)) / 100;

         button1.style.marginLeft = left1 + "px";
         button2.style.marginLeft = left2 + "px";

         if (left1 > left2) {
            between.style.width = left1 - left2 + "px";
            between.style.marginLeft = left2 + "px";
         } else {
            between.style.width = left2 - left1 + "px";
            between.style.marginLeft = left1 + "px";
         }
      };

      /*mouse*/
      button1.onmousedown = function (evt) {
         var sliderCoords = getCoords(slider);
         var betweenCoords = getCoords(between);
         var buttonCoords1 = getCoords(button1);
         var buttonCoords2 = getCoords(button2);
         var shiftX2 = evt.pageX - buttonCoords2.left;
         var shiftX1 = evt.pageX - buttonCoords1.left;

         document.onmousemove = function (evt) {
            var left1 = evt.pageX - shiftX1 - sliderCoords.left;
            var right1 = slider.offsetWidth - button1.offsetWidth;
            if (left1 < 0) left1 = 0;
            if (left1 > right1) left1 = right1;
            button1.style.marginLeft = left1 + "px";

            shiftX2 = evt.pageX - buttonCoords2.left;
            var left2 = evt.pageX - shiftX2 - sliderCoords.left;
            var right2 = slider.offsetWidth - button2.offsetWidth;
            if (left2 < 0) left2 = 0;
            if (left2 > right2) left2 = right2;

            var per_min = 0;
            var per_max = 0;
            if (left1 > left2) {
               between.style.width = left1 - left2 + "px";
               between.style.marginLeft = left2 + "px";

               per_min =
                  (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
               per_max =
                  (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
            } else {
               between.style.width = left2 - left1 + "px";
               between.style.marginLeft = left1 + "px";

               per_min =
                  (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
               per_max =
                  (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
            }
            inpt1.value =
               parseInt(min) + Math.round(((max - min) * per_min) / 100);
            inpt2.value =
               parseInt(min) + Math.round(((max - min) * per_max) / 100);
         };
         document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
         };
         return false;
      };

      button2.onmousedown = function (evt) {
         var sliderCoords = getCoords(slider);
         var betweenCoords = getCoords(between);
         var buttonCoords1 = getCoords(button1);
         var buttonCoords2 = getCoords(button2);
         var shiftX2 = evt.pageX - buttonCoords2.left;
         var shiftX1 = evt.pageX - buttonCoords1.left;

         document.onmousemove = function (evt) {
            var left2 = evt.pageX - shiftX2 - sliderCoords.left;
            var right2 = slider.offsetWidth - button2.offsetWidth;
            if (left2 < 0) left2 = 0;
            if (left2 > right2) left2 = right2;
            button2.style.marginLeft = left2 + "px";

            shiftX1 = evt.pageX - buttonCoords1.left;
            var left1 = evt.pageX - shiftX1 - sliderCoords.left;
            var right1 = slider.offsetWidth - button1.offsetWidth;
            if (left1 < 0) left1 = 0;
            if (left1 > right1) left1 = right1;

            var per_min = 0;
            var per_max = 0;

            if (left1 > left2) {
               between.style.width = left1 - left2 + "px";
               between.style.marginLeft = left2 + "px";
               per_min =
                  (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
               per_max =
                  (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
            } else {
               between.style.width = left2 - left1 + "px";
               between.style.marginLeft = left1 + "px";
               per_min =
                  (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
               per_max =
                  (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
            }
            inpt1.value =
               parseInt(min) + Math.round(((max - min) * per_min) / 100);
            inpt2.value =
               parseInt(min) + Math.round(((max - min) * per_max) / 100);
         };
         document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
         };
         return false;
      };

      button1.ondragstart = function () {
         return false;
      };
      button2.ondragstart = function () {
         return false;
      };

      function getCoords(elem) {
         var box = elem.getBoundingClientRect();
         return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset,
         };
      }
   }
});

