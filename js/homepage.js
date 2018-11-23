(function ($) {

    $("#index-slogan-english").justify();
    $(window).on('resize', function(){
        $("#index-slogan-english").justify();
    });
    document.fonts.onloadingdone = function (fontfacesetevent) {
        $("#index-slogan-english").justify();
    };


})(jQuery);