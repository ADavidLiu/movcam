$(document).ready(function () {
    
    var $headerBtn = $(".header__btn");
    var $navigation = $(".header__nav");

    $headerBtn.click(function () {
        $(this).toggleClass("header__btn--active");
        $navigation.slideToggle("fast");
    });

    var $menuTrigger = $(".menu__item--trigger");
    var $menuTriggerLink = $(".menu__item--trigger > .menu__link");

    $menuTriggerLink.click(function (e) {
        e.preventDefault();
    });

    var $window = $(window);

    $menuTrigger.click(function (e) {
        e.stopPropagation();
        var $this = $(this);
        var $innerMenu = $this.children(".menu");
        if ($innerMenu.find(".menu").length > 0) {
            $innerMenu.find(".menu").stop().slideUp("fast");
        }
        $innerMenu.stop().slideToggle("fast");
    });

    $menuTrigger.hover(function () {
        var $this = $(this);
        var $innerMenu = $this.children(".menu");
        if ($innerMenu.find(".menu").length > 0 && $window.width() > 768) {
            $innerMenu.find(".menu").stop().slideUp("fast");
        }
        $innerMenu.stop().slideDown("fast");
    }, function () {
        var $this = $(this);
        var $innerMenu = $this.children(".menu");
        if ($innerMenu.find(".menu").length > 0 && $window.width() > 768) {
            $innerMenu.find(".menu").stop().slideUp("fast");
        }
        $innerMenu.stop().slideUp("fast");
    });

    if ($(".slider").length > 0) {
        $(".slider__track").slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            appendDots: $(".slider"),
            appendArrows: $(".slider"),
            customPaging: function () {
                return "";
            },
            prevArrow: "<i class='pe-7s-angle-left slider__arrow slider__arrow--prev'></i>",
            nextArrow: "<i class='pe-7s-angle-right slider__arrow slider__arrow--next'></i>"
        });
    }

    if ($(".slider-news").length > 0) {
        $(".slider-news__track").slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            appendDots: $(".slider-news__controls"),
            appendArrows: $(".slider-news__controls"),
            customPaging: function () {
                return "";
            },
            adaptiveHeight: true,
            prevArrow: "<i class='pe-7s-angle-left-circle slider-news__arrow slider-news__arrow--prev'></i>",
            nextArrow: "<i class='pe-7s-angle-right-circle slider-news__arrow slider-news__arrow--next'></i>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        variableWidth: true,
                        arrows: true,
                        dots: false
                    }
                }
            ]
        });
    }

    if ($(".featured__slider").length > 0) {
        $(".featured__slider-track").slick({
            mobileFirst: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: true,
            dots: false,
            adaptiveHeight: true,
            appendDots: $(".featured__slider-controls"),
            appendArrows: $(".featured__slider-controls"),
            customPaging: function () {
                return "";
            },
            adaptiveHeight: true,
            prevArrow: "<i class='pe-7s-angle-left-circle featured__slider-arrow featured__slider-arrow--prev'></i>",
            nextArrow: "<i class='pe-7s-angle-right-circle featured__slider-arrow featured__slider-arrow--next'></i>",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: true
                    }
                }
            ]
        });
    }
    
});