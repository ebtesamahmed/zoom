/*global $*/

$(function () {
    'use strict';
    
    $(".nav-link").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500);
    });

    $("#port .works i").click(function () {
        $("#port .works .row:last-of-type").slideToggle();
        if ($(this).hasClass("fa fa-arrow-down")) {
            $(this).attr("class", "fa fa-arrow-up");
        } else {
            $(this).attr("class", "fa fa-arrow-down");
        }
    });
    
    
    var n;
    if (window.innerWidth <= 768) {
        n = 1;
    } else {
        n = 3;
    }
    
    $(".slider").slick({
        slidesToShow: n,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        accessibility: false,
        rtl: true
    });
    
});