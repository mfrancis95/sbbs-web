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

    /*UNCOMMENT THIS IF YOU NEED TO RETURN BACK TO THE ORIGINAL SCROLL SPY
     * But if you do this, comment out
     */
    // Highlight the top nav as scrolling occurs
    /*$('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });*/

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
    
    //Google Map
	var latitude = $('#google-map').data('latitude')
	var longitude = $('#google-map').data('longitude')
	function initialize_map() {
		var myLatlng = new google.maps.LatLng(latitude,longitude);
		var mapOptions = {
			zoom: 14,
			scrollwheel: false,
			center: myLatlng
		};
		var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
		var contentString = '';
		var infowindow = new google.maps.InfoWindow({
			content: '<div class="map-content"><ul class="address">' + /**$('.address').html()**/ "Long Island High-Technology Incubator" + '</ul></div>'
		});
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map
		});
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize_map);
 
    var active = null;
    var settingActive = false;
    
    $(window).scroll(function() {
        if (!settingActive) {
            settingActive = true;
            requestAnimationFrame(function() {
                var navItems = $(".nav li a");
                for (var i = navItems.length - 1; i >= 0; i--) {
                    var navItem = navItems.eq(i);
                    var href = navItem.attr("href");
                    var pageTitle = $('title').text();
                    //Set active toolbar link based on current slide in #main-slider
                    if (href === "#main-slider" && pageTitle==="Stony Brook Building Science") {
                       //
                    }
                    //Otherwise set active toolbar link based on the element on the page
                    else if (href.startsWith("#")) {
                        //Change 72 to a jQuery call that grabs the navbar's height
                        if (window.scrollY >= $(navItem.attr("href")).offset().top - 72) {
                            if (active) {
                                active.removeClass("active");
                            }
                            active = navItem.parent().addClass("active");
                            break;
                        }
                    }
                }
                settingActive = false;
            });
        }
    });
    
    //Load Google Maps
    /*new google.maps.Map(document.getElementById("map"), {
        center: {lat: 40.9125559, lng: -73.1162277},
        scrollwheel: false,
        zoom: 16
    });*/
    

})(jQuery); // End of use strict