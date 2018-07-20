$.main = {
    /*------------------------------------------------------------
        0.1. Menu Mobile
    ------------------------------------------------------------*/
    menuMobile: function () {
        var widthWindow = $(window).width();
        var wrapHeaderMobile = $('.nlist__header.mobile');
        var hamburgerEle = $('.hamburger-menu');
        hamburgerEle.on('click', function () {
            $(this).parents('.nlist__header').find('.nlist__header.mobile').toggleClass('active');
        })
    },
};
$(function () {
    $.main.menuMobile();
});