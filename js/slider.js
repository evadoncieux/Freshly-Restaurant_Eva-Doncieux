$(document).ready(function () {
    $('.home-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        mobileFirst: true,
        speed: 1500,
    });
});

$('.slider').slick({
    arrows: false
})

$('.left').click(function () {
    $('.slider').slick('slickPrev');
})

$('.right').click(function () {
    $('.slider').slick('slickNext');
})