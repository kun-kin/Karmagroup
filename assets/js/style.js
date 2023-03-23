$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('scroll-down');
    } else {
        $('.header').removeClass('scroll-down');
    }

    //scroll to div
    // if ($(this).scrollTop() > $('.floating-nav').offset().top) {
    //     $('.floating-nav').addClass('fixed');
    //     $('.header').addClass('floating');
    // } else {
    //     $('.floating-nav').removeClass('fixed');
    //     $('.header').removeClass('floating');
    // }

});




/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});




$(document).ready(function() {



    $(".formselectbook").click(function() {
        $('.contentresorts').slideToggle();
    });

    $(".spa-filters-dropdown .spa-filters-selected--btn").click(function() {
        $(this).parents('.spa-filters-dropdown').children('.spa-dropdown-wrapper').slideToggle();
    });



    // $('#check-in').datepicker();
    // $('#check-out').datepicker();
    $("#checkIn").flatpickr({
        dateFormat: "d/m/Y"
    });
    $("#checkOut").flatpickr({
        dateFormat: "d/m/Y"
    });

    $(".bookingbar__input-wrapper").click(function() {
        $(this).children('.bookingbar__dropdown-content').toggleClass('open');
    });

    $(".bar_group").click(function() {
        if ($(window).width() < 1023) {
            $('.main_nav').slideToggle();
        }
    });


    $('.header_navhover').hover(function() {
        if ($(window).width() > 1024) {
            $('.navContent').stop().slideDown("600");
        }
    }, function() {
        if ($(window).width() > 1024) {
            $('.navContent').stop().slideUp("600");
        }
    })

    $(".header_navhover").click(function() {
        if ($(window).width() < 1023) {
            $('.navContent').stop().slideToggle("600");
        }
    });

    $("#open_destination_mobile_wrapper").click(function() {
        if ($(window).width() < 768) {
            $('.form__bookingbar').slideToggle("600");
            $('.booking-now-btn').toggleClass('act');
        }
    });


    //hover function
    // $(".menu-left .menu-left__link").mouseover(function() {
    //     $(this).addClass('open').removeClass('unhovered');
    //     $('.menu-left__link').not($(this)).addClass('unhovered');
    // });
    // $(".menu-left .menu-left__link").mouseout(function() {
    //     $(this).removeClass('open');
    // });

    $(document).mouseup(function(e) {
        if ($(e.target).closest(".spa-dropdown-wrapper").length ===
            0) {
            $('.spa-dropdown-wrapper').slideUp();
        }
    });

});