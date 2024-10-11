(function($) {
    "use strict";
    $(window).on('load', function() {
        $.material.init();
        $('.dropdown-toggle').dropdown()
        $('.search-icon').on('click', function() {
            $('.navbar-form').fadeIn(300);
            $('.navbar-form input').focus();
        });
        $('.navbar-form input').blur(function() {
            $('.navbar-form').fadeOut(300);
        });
        $('.carousel').carousel()
        $('#preloader').fadeOut();
        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });
        var wow = new WOW({
            mobile: true
        });
        wow.init();
         var owl = $(".testimonials-carousel");
         owl.owlCarousel({
             navigation: false,
             pagination: false,
             slideSpeed: 1000,
             stopOnHover: true,
             autoPlay: true,
             items: 1,
             itemsDesktopSmall: [1024, 1],
             itemsTablet: [600, 4],
             itemsMobile: [479, 1]
         });
        var owl = $("#carousel-full");
        owl.owlCarousel({
            navigation: false,
            pagination: false,
            slideSpeed: 1000,
            stopOnHover: true,
            autoPlay: true,
            items: 1,
            itemsDesktopSmall: [1024, 1],
            itemsTablet: [600, 1],
            itemsMobile: [479, 1]
        });
        var owl = $("#client-logo");
        owl.owlCarousel({
            navigation: false,
            pagination: false,
            slideSpeed: 1000,
            stopOnHover: true,
            autoPlay: true,
            items: 4,
            itemsDesktopSmall: [1024, 3],
            itemsTablet: [600, 1],
            itemsMobile: [479, 1]
        });
		var owl = $("#team-scroll");
        owl.owlCarousel({
            navigation: true,
            pagination: false,
            slideSpeed: 1000,
            stopOnHover: true,
            autoPlay: true,
            items: 3,
            itemsDesktopSmall: [1024, 3],
            itemsTablet: [600, 1],
            itemsMobile: [479, 1]
        });
		 $('#team-scroll').find('.owl-prev').html('');
        $('#team-scroll').find('.owl-next').html('');
        var owl = $("#flickr-carousel");
        owl.owlCarousel({
            slideSpeed: 300,
            paginationSpeed: 400,
            items: 1,
            autoPlay: 3000,
            stopOnHover: true,
        });
        //food category slider
        var owl = $("#Material-image-carousel");
        owl.owlCarousel({
            navigation: true,
            pagination: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            items: 7,
            autoPlay: 3000,
            stopOnHover: true,
            itemsDesktopSmall: [1024, 4],
            itemsTablet: [800, 4],
            itemsMobile: [479, 3]
        });
        $('#Material-image-carousel').find('.owl-prev').html('<i class="mdi mdi-arrow-left"></i>');
        $('#Material-image-carousel').find('.owl-next').html('<i class="mdi mdi-arrow-right"></i>');
        //home city slider
        var owl = $("#home-city");
        owl.owlCarousel({
            navigation: true,
            pagination: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            items: 2,
            autoPlay: true,
            stopOnHover: true,
            itemsDesktopSmall: [1024, 2],
            itemsTablet: [800, 2],
            itemsMobile: [479, 1],
            // responsiveClass:true,
            // responsive:{
            //     0:{
            //       items:1,
            //     },
            //     1440:{
            //       items:3,
            //     },
            //     2560:{
            //       items:5,
            //     }
            //   }
        });
        $('#home-city').find('.owl-prev').html('<i class="mdi mdi-arrow-left"></i>');
        $('#home-city').find('.owl-next').html('<i class="mdi mdi-arrow-right"></i>');
		//home dishes slider
        var owl = $("#home-dishes");
        var screenWidth = window.screen.width;
        var itemsToShow = screenWidth > 2500 ? 8 : 4; 

        owl.owlCarousel({
            navigation: true,
            pagination: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            items: itemsToShow,
            autoPlay: true,
            stopOnHover: true,
            itemsDesktop: [2560, itemsToShow], // Adjusted for desktop
            itemsDesktopSmall: [1024, 4], // Adjusted for smaller desktops
            itemsTablet: [800, 3], // Adjusted for tablets
            itemsMobile: [479, 1] // Adjusted for mobile devices
        });
        
        $('#home-dishes').find('.owl-prev').html('<i class="mdi mdi-arrow-left"></i>');
        $('#home-dishes').find('.owl-next').html('<i class="mdi mdi-arrow-right"></i>');
		
		
		//home dishes slider
        var owl = $("#home-dishes-2");
        
        owl.owlCarousel({
            navigation: true,
            pagination: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            items: itemsToShow,
            autoPlay: true,
            stopOnHover: true,
            itemsDesktop : [2560,itemsToShow],
            itemsDesktopSmall: [1024, 4],
            itemsTablet: [800, 3],
            itemsMobile: [479, 1]
        });
        $('#home-dishes-2').find('.owl-prev').html('<i class="mdi mdi-arrow-left"></i>');
        $('#home-dishes-2').find('.owl-next').html('<i class="mdi mdi-arrow-right"></i>');
		
		//home dishes slider
        var owl = $("#home-dishes-3");
        owl.owlCarousel({
            navigation: true,
            pagination: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            items: itemsToShow,
            autoPlay: true,
            stopOnHover: true,
            itemsDesktop : [2560,itemsToShow],
            itemsDesktopSmall: [1024, 4],
            itemsTablet: [800, 3],
            itemsMobile: [479, 1]
        });
        $('#home-dishes-3').find('.owl-prev').html('<i class="mdi mdi-arrow-left"></i>');
        $('#home-dishes-3').find('.owl-next').html('<i class="mdi mdi-arrow-right"></i>');
        
		//home dishes slider
        var owl = $("#home-dishes-4");
        owl.owlCarousel({
            navigation: true,
            pagination: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            items: itemsToShow,
            autoPlay: true,
            stopOnHover: true,
            itemsDesktop : [2560,itemsToShow],
            itemsDesktopSmall: [1024, 4],
            itemsTablet: [800, 3],
            itemsMobile: [479, 1]
        });
        $('#home-dishes-4').find('.owl-prev').html('<i class="mdi mdi-arrow-left"></i>');
        $('#home-dishes-4').find('.owl-next').html('<i class="mdi mdi-arrow-right"></i>');
		
		//team slider
        var owl = $("#team-carousel");
        owl.owlCarousel({
            slideSpeed: 300,
            paginationSpeed: 400,
            items: 4,
            autoPlay: 3000,
            stopOnHover: true,
        });
        	//home dishes slider
            var owl = $("#menuofferbanner");
            owl.owlCarousel({
                navigation: false,
                pagination: false,
                slideSpeed: 300,
                paginationSpeed: 400,
                items: 1,
                autoPlay: true,
                stopOnHover: true,
                itemsDesktopSmall: [1024, 1],
                itemsTablet: [800, 1],
                itemsMobile: [479, 1]
            });
        $('.work-counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function() {
                    var $this = $(this);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).off('inview');
            }
        });
        $('#matrl-portfolio').mixItUp();
        $('#resta-gallery-portfolio').mixItUp();
        $('#myTab a').on('click', function(e) {
            e.preventDefault()
            $(this).tab('show')
        })
        $('.wpb-mobile-menu').slicknav({
            prependTo: '.navbar-header',
            parentTag: 'span',
            allowParentLinks: true,
            duplicate: false,
            label: '',
            closedSymbol: '<i class="mdi mdi-chevron-right"></i>',
            openedSymbol: '<i class="mdi mdi-chevron-down"></i>',
        });
        var offset = 200;
        var duration = 500;
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });
        $('.back-to-top').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });
}(jQuery));