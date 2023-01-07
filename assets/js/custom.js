$(window).resize(function () {
  //Function
});

$(document).ready(function () {
  // //Function

  // // WOW JS
  // new WOW().init();

  //  //Menu Js
  //  $('.menu_toggle_btn').click(function(){
  //     $('.header_wrapper').toggleClass('menu_open');
  //     $('html').toggleClass('cm-overflow');
  // });
  // $('.close_menu_btn, .menu_block ul li a').click(function(){
  //     $('.header_wrapper').removeClass('menu_open');
  //     $('html').removeClass('cm-overflow');
  // });

  //Smooth Scroll Js
  $("body").impulse({
    range: 150,
  });

  // owl caresoul page-2-code-js
  $(".parent .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // menu js
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const cmOver = document.querySelector("html");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    cmOver.classList.toggle("cm-overflow");
  });

  document.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  ); // menu js end

  // auto slider slick slider
  mobileOnlySlider(".mySlider", true, false, 991);

  function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
    var slider = $($slidername);
    var settings = {
      mobileFirst: true,
      dots: $dots,
      arrows: $arrows,
      responsive: [
        {
          breakpoint: $breakpoint,
          settings: "unslick",
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };

    slider.slick(settings);

    $(window).on("resize", function () {
      if ($(window).width() > $breakpoint) {
        return;
      }
      if (!slider.hasClass("slick-initialized")) {
        return slider.slick(settings);
      }
    });
  } // Mobile Only Slider

  //   collapes
  $(".footer_title").click(function () {
    if ($(window).width() < 576) {
      $(this).siblings("ul").slideToggle();
      $(this).siblings("ul").siblings().find("img").toggleClass("rotat");
    }
  });
});

// -------------------------------------------------------------------------------------------------------
// only-js
// filter-checkbox-1-in table

function show(value) {
  document.querySelector(".text-box").value = value;
}

let dropdown = document.querySelector(".dropdown");
dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};

// filter-checkbox-2-in table

function show2(value) {
  document.querySelector(".text-box2").value = value;
}

let dropdown2 = document.querySelector(".dropdown2");
dropdown2.onclick = function () {
  dropdown2.classList.toggle("active");
};
