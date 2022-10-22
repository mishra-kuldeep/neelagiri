

$('.slimmenu').slimmenu(
    {
        resizeWidth: '991',
        collapserTitle: '',
        animSpeed: 'medium',
        indentChildren: true,
        childrenIndenter: '&raquo;'
    });


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
        $(".headersec").addClass("fixed");
    } else {
        $(".headersec").removeClass("fixed");
    }
});


$('.bannerSec .owl-carousel').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    lazyLoad: true,
    loop: true,
    margin: 0,
    dots: true,
});

$('.recipesSec .owl-carousel').owlCarousel({
    items: 4,
    autoplay: true,
    autoplayTimeout: 4000,
    lazyLoad: true,
    loop: true,
    margin: 20,
    dots: true,
});
