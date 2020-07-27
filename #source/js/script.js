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


