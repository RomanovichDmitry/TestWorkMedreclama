// import 'bootstrap/dist/css/bootstrap.min.css'; //all styles
// import 'bootstrap'; //all scripts

const $ = require( "jquery" ); //jQuery

import 'jquery.maskedinput/src/jquery.maskedinput'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.scss' //SLICK SLIDER
import 'slick-carousel'

import 'lightbox2'
import 'lightbox2/dist/css/lightbox.min.css'

import './styles/index.scss';

$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows:false,
                autoplay: true,
                autoplaySpeed:3000,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows:false,
                autoplay: true,
                autoplaySpeed:3000,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed:3000,
    dots: true,
});

$('.read__more').click(function() {
    $(this).siblings(".reviews__text").toggleClass('active');
    if ($(this).siblings(".reviews__text").hasClass('active')) {
        $(this).html('Свернуть');
    } else {
        $(this).html('Читать далее');
    }
});

$(function($){
    $('#tel').mask("+7(999) 999-9999");
});



const reviewElem = document.querySelectorAll(`.reviews__item`);

reviewElem.forEach(elem => {
    let text = elem.querySelector(`.reviews__text`);
    let btn = elem.querySelector(`.read__more`);
    if(text.innerHTML.length < 265){
        btn.style.display="none";
    }

})