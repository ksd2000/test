$('.banner').slick({
    dots: true,
});
$('.main_slider').slick({
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        speed: 300,
        prevArrow: $('.main_slider_left'),
        nextArrow: $('.main_slider_right'),
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                centerMode: false,
                }
            },
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                centerMode: false,
                }
            },
            {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                }
            },
            {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                }
            }
        ]
    });







