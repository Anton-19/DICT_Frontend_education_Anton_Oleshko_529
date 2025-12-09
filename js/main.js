console.log("Сайт кафедри завантажено успішно!");


document.getElementById("menu-btn").onclick = function () {
    document.querySelector(".mobile-menu").classList.toggle("show");
};
// Бургер-меню
$('.burger').on('click', function () {
    $('.menu').toggleClass('show');
    $(this).toggleClass('show');
});

// Мовний перемикач
$('.lang-item').on('click', function () {
    $('.lang-item').removeClass('is-active');
    $(this).addClass('is-active');
});

// Slick slider
const $slickElement = $('#news .news-cards');

$slickElement.not('.slick-initialized').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    cssEase: 'ease-in-out',

    prevArrow: "<button type='button' class='slick-prev pull-left' aria-label='Previous arrow'><i class='fa fa-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right' aria-label='Next arrow'><i class='fa fa-angle-right'></i></button>",

    responsive: [
        {
            breakpoint: 1200,
            settings: { slidesToShow: 4 }
        },
        {
            breakpoint: 992,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 576,
            settings: { slidesToShow: 1 }
        }
    ]
});
