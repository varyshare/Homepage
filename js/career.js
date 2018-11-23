(function ($) {

    $("#slogan-english").justify();
    $(window).on('resize', function(){
        $("#slogan-english").justify();
    });
    document.fonts.onloadingdone = function (fontfacesetevent) {
        $("#slogan-english").justify();
    };


})(jQuery);