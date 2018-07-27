$(function(){

	
	$('body').scrollspy({
		target:'.main-nav',
		offset:70 //offset is the distance from the top when the scroll hits the desired section.
	});

	var winHeight= $(window).height();
	$('#slider .item').css('height',winHeight);

	$(window).resize(function(){
		$('#slider .item').css('height',winHeight);
	});

	// Scroll Menu
	//scorllTop() returns or sets, the current vertical position of the scroll bar.The vertical scroll position is the same as the number of pixels that are hidden from view above the scrollable area. 
	//If the scroll bar is at the very top, or if the element is not scrollable, this number will be 0.

	$(window).on('scroll', function(){
		if( $(window).scrollTop()> (winHeight-70) ){ //if the current scroll position from the top is greater than the height of the window i.e. item height from above
			$('.main-nav').addClass('navbar-fixed-top'); //make the nav fixed.
		} else {
			$('.main-nav').removeClass('navbar-fixed-top');
		}
	});

	// Close the menu on the click of a link	
	$('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.nav li a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50) //offset().top returns the position of the anchor element as top:something. And 50 is decreased from that top.
        }, 1250, 'easeInOutExpo'); //sets the scrolltop i.e scrollbar to the position where the clicked anchor element is and decreases the offset by 50.
        event.preventDefault();  //Or simply the minus value pushes the position down.
    });

    // Navigate to service section on click of the angle down arrow
    $('#toservices').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 150 }, 1000); //Same as above. 150 indicates the distance from the navbar and the services section.Increase the value and the services section will go up.
		return false;
	});

	// Progress Bar
	$('#about').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$.each($('div.progress-bar'),function(){
				$(this).css('width', $(this).attr('aria-value')+'%');
			});
			$(this).unbind('inview');
		}
	});

	// Countdown
	$('.achievements').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.counter').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

	// Initiate WOW JS
	new WOW().init();

});