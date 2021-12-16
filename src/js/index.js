window.$ = window.jQuery = require('jquery');
import Swiper, { Autoplay, Navigation } from 'swiper';

Swiper.use([ Autoplay, Navigation ]);

$(document).ready(function (){

    const swiper = new Swiper('.swiper-about', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            580: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            840: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //Tabs
    $('.tabs__button').on('click', function () {
        $(".tabs .tabs__button").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");
    $(".tabs__item").eq(0).fadeIn();
})

$(window).scroll(function () {
    const headerHeight = $('.header').outerHeight();
    const bannerHeight = $('.main-banner').outerHeight();
    if($(window).scrollTop() >= (bannerHeight - headerHeight)) {
        $('.header').addClass('sticky');
    }
    else {
        $('.header').removeClass('sticky');
    }
})