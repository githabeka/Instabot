$(document).ready(function() {
    $('.faq__subtitle').click(function(event) {
        if($('.faq__accordeon').hasClass('one')) {
            $('.faq__subtitle').not($(this)).removeClass('active');
            $('.faq__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });

   
});



$(function() {
    $("[data-scroll").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        

        $("html, body").animate({
            scrollTop: elementOffset - -80
        }, 900)
    });

    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
    });
    $('.header__item').click(function(event) {
        $('.header__menu').removeClass('active');
    });
});