// Header
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
 
window.addEventListener("scroll", () => {
      if (window.scrollY > headerHeight) {
      header.setAttribute("style", "background: #ffffff;");
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


// map
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = { 
        center: new kakao.maps.LatLng(37.46371461160396, 129.01427546115326), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var imageSrc = 'map_icon.svg', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new kakao.maps.LatLng(37.46371461160396, 129.01427546115326); // 마커가 표시될 위치입니다

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
  image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);  

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
var content = '<div class="customoverlay">' +
    '  <a href="http://kko.to/jiu_spZ4T" target="_blank">' +
    '    <span class="title">삼화사 템플스테이</span>' +
    '  </a>' +
    '</div>';

// 커스텀 오버레이가 표시될 위치입니다 
var position = new kakao.maps.LatLng(37.46371461160396, 129.01427546115326);  

// 커스텀 오버레이를 생성합니다
var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: position,
    content: content,
    yAnchor: 1 
});