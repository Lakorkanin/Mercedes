$(function(){
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 3,
        variableWidth: true,
        prevArrow: '<img src="images/arrow-left.svg" alt="" class="arrow arrow-left">',
        nextArrow: '<img src="images/arrow-right.svg" alt="" class="arrow arrow-right">',
        response: [
            {
                breakpoint: 361,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1
                }
            }
        ]
    });
});