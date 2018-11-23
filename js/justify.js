
(function($) {
    var calcLetterSpacing = function(element, width){

        var letterSpacing = 0;

        var copy = $(element).clone();
        copy.hide();
        $(element).before(copy);

        copy.css('letter-spacing', 0);
        copy.css('float', 'left');
        copy.css('width', 'auto');
        var innerWidth = copy.innerWidth();

        var textLength = jQuery.trim(copy.text()).length;

        letterSpacing = (width - innerWidth) /  (textLength - 1);
        letterSpacing = Math.floor(letterSpacing) - 1;

        copy.remove();

        return letterSpacing;
    }

    /**
     * console.log wrapper
     */
    var log = function(msg){
        if (typeof console != 'undefined') {
            console.log(msg);
        }
    };

    jQuery.fn.justify = function(){
        var maxWidth = 0;
        this.each(function(){
            if (maxWidth < $(this).innerWidth()) {
                maxWidth = $(this).innerWidth();
            }
        });

        this.each(function(){

            var letterSpacing = 0;

            if (jQuery.trim($(this).text()).length < 2) {
                return;
            }

            letterSpacing = calcLetterSpacing(this, maxWidth);

            $(this).css('letter-spacing', letterSpacing + 'px');
        });

    };
}(jQuery));
