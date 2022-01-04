 window.$ = window.jQuery = require('jquery');
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

//menu mobail
$(document).ready(function () {
    $('.menu').on('click', function () {
        $('.navigation').slideToggle();
    })
});

$(window).resize(function () {
    const windowWidth = $(window).outerWidth();
    if(windowWidth > 750){
        $('.navigation').attr('style');
    }
})
//--

//Anchor links
$('a').on('click', function (e) {
    e.preventDefault();
    const hh = $('.header').outerHeight();
    if(this.hash !=='') {
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - hh
        }, 360, function () {
            window.location.hash = hash - hh;
        })
    }
})



Swiper.use([ Autoplay, Navigation, Pagination ]);

$(document).ready(function (){

    //about slider 
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

    //Client slider
    const client_swiper = new Swiper('.client_swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight:true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
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