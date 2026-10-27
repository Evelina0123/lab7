/*jslint browser */
/*global $ */

const SLIDES_DESKTOP = 3;
const MOBILE_BREAKPOINT = 768;

const ARROW_PREV = "<button type='button' class='gallery-arrow gallery-prev' "
        + "aria-label='Назад'><svg width='24' height='24' viewBox='0 0 24 24' "
        + "aria-hidden='true'><path d='M15 4L7 12l8 8' fill='none' "
        + "stroke='currentColor' stroke-width='3' stroke-linecap='round' "
        + "stroke-linejoin='round'/></svg></button>";

const ARROW_NEXT = "<button type='button' class='gallery-arrow gallery-next' "
        + "aria-label='Вперёд'><svg width='24' height='24' viewBox='0 0 24 24' "
        + "aria-hidden='true'><path d='M9 4l8 8-8 8' fill='none' "
        + "stroke='currentColor' stroke-width='3' stroke-linecap='round' "
        + "stroke-linejoin='round'/></svg></button>";

// Обновляет текст пейджера: текущая страница и общее количество страниц.
function updatePager(slick) {
    const total = slick.slideCount - slick.options.slidesToShow + 1;
    const current = slick.currentSlide + 1;
    $("#pager-text").text("Страница " + current + " из " + total);
}

$(document).ready(function () {
    const gallery = $("#gallery");

    gallery.on("init reInit afterChange", function (ignore, slick) {
        updatePager(slick);
    });

    gallery.slick({
        slidesToShow: SLIDES_DESKTOP,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: ARROW_PREV,
        nextArrow: ARROW_NEXT,
        dots: true,
        appendDots: $("#pager-dots"),
        responsive: [
            {
                breakpoint: MOBILE_BREAKPOINT,
                settings: {slidesToShow: 1}
            }
        ]
    });
});
