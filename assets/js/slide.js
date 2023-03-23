// $('.promotion-slide').slick({
//     rows: 2,
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [{
//             breakpoint: 577,
//             settings: {
//                 rows: 2,
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },
//         {
//             breakpoint: 576,
//             settings: {
//                 rows: 1,
//             },
//         }
//     ],
// });

// $('.about-slide').slick({
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnFocus: false,
//     pauseOnHover: false,
//     pauseOnDotsHover: false,
// });
$('.blogs-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            },
        }
    ],
});

$('.banner-home__slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
});
$('.banner-slider__wrapper').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
});

// $('.room-detail__image-slide').slick({
//     dots: true,
//     arrows: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [{
//         breakpoint: 576,
//         settings: {
//             dots: false,
//         },
//     }],
// });

$('.related-slider').slick({
    dots: false,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-regular fa-arrow-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-regular fa-arrow-right'></i></button>",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            },
        }
    ],
});


$('.spa-wrap__contentmain-list.style--slider').slick({
    dots: false,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-regular fa-arrow-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-regular fa-arrow-right'></i></button>",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            },
        }
    ],
});


$('.offers-wrap__contentmain-list.style--slider').slick({
    dots: false,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-regular fa-arrow-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-regular fa-arrow-right'></i></button>",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    mobileFirst: true,
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            },
        }
    ],
});



// $('.overview-list').slick({
//     dots: true,
//     arrows: false,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 4,
//                 dots: false,
//             },
//         },
//         {
//             breakpoint: 991,
//             settings: {
//                 slidesToShow: 3,
//                 dots: false,
//             },
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2,
//                 dots: false,
//             },
//         },
//         {
//             breakpoint: 576,
//             settings: {
//                 slidesToShow: 1,
//                 dots: true,
//             },
//         }
//     ],
// });
// $('.offers-list').slick({
//     dots: true,
//     arrows: false,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 4,
//                 dots: false,
//             },
//         },
//         {
//             breakpoint: 991,
//             settings: {
//                 slidesToShow: 3,
//                 dots: false,
//             },
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2,
//                 dots: false,
//             },
//         },
//         {
//             breakpoint: 576,
//             settings: {
//                 slidesToShow: 1,
//                 dots: true,
//             },
//         }
//     ],
// });


$('.component__slider-for').slick({
    loop: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dot: true,
    fade: true,
    asNavFor: '.component__slider-nav'
});
$('.component__slider-nav').slick({
    loop: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.component__slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
});