$(function () {
    "use strict";
    
    var winH   =$(window).height(),
        upperH =$(".upper-bar").innerHeight(),
        navH   =$(".navbar").innerHeight();
    $(".slider, .carousel-item").height(winH - (upperH + navH));   
    
    // featured work shuffle
    $('.featured-worK .work-list li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class')=== 'all') {
            $('.row .feat-img').css('opacity', 1);
        } else {
            $('.row .feat-img').css('opacity', '.2');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
});

