export default ($) => {
    let height = $("header").outerHeight();

    $("#page").css("padding-top", "" + height + "px");

    if ($(window).outerWidth() > 768) {
        $("#search path").css("fill", "var(--txt-color)");
        $(".search-form").css("height", "" + height + "px");
    }

    $(".js-menu-toggle").click(function () {
        $(".site-nav").toggleClass("active");
    });

    $(".search-button svg").click(function () {
        $(".search-form").addClass("active");
    });

    $(".js-menu-toggle1").click(function () {
        $(".search-form").removeClass("active");
    });

    $(window).resize(function () {
        height = $("header").outerHeight();
        if ($(window).outerWidth() > 768) {
            $(".site-nav").removeClass("active");
            $("#search path").css("fill", "var(--txt-color)");
            $(".search-form").css("height", "" + height + "px");
            $("#page").css("padding-top", "" + height + "px");
        }
        if ($(window).outerWidth() < 768) {
            $("#search path").css("fill", "");
            $(".search-form").css("height", "");
        }
    });

    let lastScroll = 0;

    $(window).scroll(function () {
        let i = $(window).scrollTop();
        if (lastScroll > height) {
            if (i > lastScroll) {
                $("header").css("transform", "translateY(-100%)");
                $(".site-nav").removeClass("active");
            }
            else {
                $("header").css("transform", "translateY(0%)");
            }
        }
        lastScroll = i;
    });
};