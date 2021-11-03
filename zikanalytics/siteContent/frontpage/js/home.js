$(document).ready(function () {

    // CALC PADDING FOR BODY TOP 
    var navHeight = $('.navBarWrap').outerHeight();
    $('body').css({ 'padding-top': navHeight + 'px' });


    // ON SCROLL
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();
        if (wScroll > 50) {
            $('.navBarWrap').addClass('navbarShrink');
        }
        else {
            $('.navBarWrap').removeClass('navbarShrink');
        }
    });

    var scrollLink = $('.scrollLink');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 40
        }, 1000);
        $('#smMenu').removeClass('menuOpened');
        $('#siteWrapper').removeClass('bodyMove');
        $('.menuClose').hide();
        $('.menuOpen').show();

    });
    $('.menuOpen').click(function () {
        $('#smMenu').addClass('menuOpened');
    });
    $('.menuClose').click(function () {
        $('#smMenu').removeClass('menuOpened');
    });

    $('.planSwitchBtn').click(function () {

        $('body,html').animate({
            scrollTop: $('.switchWrap').offset().top - 90
        }, 1000);
    });


    $('.tab-content-set:not(:first)').hide();
    $('.nav-homeNav ul li a').click(function (event) {
        event.preventDefault();
        var content = $(this).attr('href');
        $(this).addClass('tab-active');
        $(this).parent().siblings().children().removeClass('tab-active');
        $(content).show();
        $(content).siblings('.tab-content-set').hide();
    });





    $('.dropdownBtn').mouseenter(function () {
        $(this).children('.zikDropdown').addClass('dpActive');
        $(this).children("a").find('.carret').html('<i class="fas fa-caret-up"></i>');

        $(this).siblings(".dropdownBtn").children(".zikDropdown").removeClass("dpActive");
        $(this).siblings(".dropdownBtn").children("a").find('.carret').html('<i class="fas fa-caret-down"></i>');
    });

    $('.navBarWrap,.zikDropdown').mouseleave(function () {
        $(".zikDropdown ").removeClass("dpActive");
        $('.carret').html('<i class="fas fa-caret-down"></i>');
    });

    $('.zikDropdown a').click(function (e) {
        e.stopPropagation();
    });


    
});


