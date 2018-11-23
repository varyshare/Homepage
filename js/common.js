(function ($) {

    $(".navbar .nav-item").on("click", function(){
        $(".navbar").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    $('#carousel').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplayspeed: 2500,
        pauseOnHover: false,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });


})(jQuery);
