// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
    
    //Fade in scrollToTop button when view is below the header
    $(window).scroll(function(){
        if ($(this).scrollTop() > $("header").height()) {
            $('.scrollToTop').fadeIn(200,function(){});
	}
        else {
	    $('.scrollToTop').fadeOut(200,function(){});
	}
    });
    
    $('#scrollUpButton').click(function(){
        $('#scrollUpButton').fadeOut("slow");
    });
    
    //Load Google Maps
    /*new google.maps.Map(document.getElementById("map"), {
        center: {lat: 40.9125559, lng: -73.1162277},
        scrollwheel: false,
        zoom: 16
    });*/
    

})(jQuery); // End of use strict