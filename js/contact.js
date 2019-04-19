(function ($) {
    var map = new window.BMap.Map("contact-map");    
    // var center = new window.BMap.Point(113.954900, 22.551000);
    var center = new window.BMap.Point(113.952473, 22.553522);

    map.setCurrentCity("深圳");     
    map.enableScrollWheelZoom(true);

    map.centerAndZoom(center, 17);  
    
    map.addControl(new window.BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
        ]}));

    marker = new window.BMap.Marker(center);
    map.addOverlay(marker);

})(jQuery);
