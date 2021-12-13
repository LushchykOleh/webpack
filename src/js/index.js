window.$ = window.jQuery = require('jquery');

$(document).ready(function (){

  const swiper = new Swiper('.swiper-about', {
      loop: true,
      autoplay: {
          delay: 5000,
      },
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });
})