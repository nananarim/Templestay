// Header
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
 
window.addEventListener("scroll", () => {
      if (window.scrollY > headerHeight) {
      header.setAttribute("style", "background: #fff;");
   } else {
      
header.setAttribute("style", "background: transparent;");
   }
});

//menu-toggle-btn
$(function() {
    $(".menu-toggle-btn").click(function() {
      $(".gnb").stop().slideToggle("fast");
    });
  });

//slider
$('.slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

//swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  initialSlide: 1,
  spaceBetween: 70,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// program hover
$('.a1').hover(function(){
  $('.a').css('display', 'block');
  $('.b').css('display', 'none');
  $('.c').css('display', 'none');
  $('.d').css('display', 'none');
});
$('.b1').hover(function(){
  $('.a').css('display', 'none');
  $('.b').css('display', 'block');
  $('.c').css('display', 'none');
  $('.d').css('display', 'none');
});
$('.c1').hover(function(){
  $('.a').css('display', 'none');
  $('.b').css('display', 'none');
  $('.c').css('display', 'block');
  $('.d').css('display', 'none');
});
$('.d1').hover(function(){
  $('.a').css('display', 'none');
  $('.b').css('display', 'none');
  $('.c').css('display', 'none');
  $('.d').css('display', 'block');
});


//port_view
$('.ac1').hover(function(){
  $('.ac1').addClass('active');
  $('.ac2').removeClass('active');
  $('.ac3').removeClass('active');
  $('.ac4').removeClass('active');
});
$('.ac2').hover(function(){
  $('.ac2').addClass('active');
  $('.ac1').removeClass('active');
  $('.ac3').removeClass('active');
  $('.ac4').removeClass('active');
});
$('.ac3').hover(function(){
  $('.ac3').addClass('active');
  $('.ac2').removeClass('active');
  $('.ac1').removeClass('active');
  $('.ac4').removeClass('active');
});
$('.ac4').hover(function(){
  $('.ac4').addClass('active');
  $('.ac2').removeClass('active');
  $('.ac3').removeClass('active');
  $('.ac1').removeClass('active');
})
//aos
AOS.init();
 
 // section02 hover
 (function () {
  var $masterHover = $("#masterHover"),
      $hoverLi = $masterHover.find("li"),
      $masterTab = $("#masterTab"),
      $tabLi = $masterTab.find("li"),
      _idx;

  $tabLi.on("mouseenter", function () {
      _idx = $(this).index();

      $(".main_master").addClass("active");
      $(this).addClass("active");
      $hoverLi.eq(_idx).addClass("active").siblings().removeClass("active");
  });

  $tabLi.on("mouseleave", function () {
      $(".main_master").removeClass("active");
      $tabLi.eq(_idx).removeClass("active");
  });
})();


