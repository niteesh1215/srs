/**	
	Custom JS
	
	1. FIXED MENU
	2. EVENT TIME COUNTER
	3. MENU SMOOTH SCROLLING
	4. VIDEO POPUP
	5. SPEAKERS SLIDEER ( SLICK SLIDER )
	6. BOOTSTRAP ACCORDION 
	7. MOBILE MENU CLOSE  
	
**/



(function ($) {

	/* ----------------------------------------------------------- */
	/*  1. FIXED MENU
	/* ----------------------------------------------------------- */


	jQuery(window).bind('scroll', function () {
		if ($(window).scrollTop() > 150) {
			$('.nkm-navbar').addClass('nkm-nav-show');

		} else {
			$('.nkm-navbar').removeClass('nkm-nav-show');
		}
	});

	/* ----------------------------------------------------------- */
	/*  2. EVENT TIME COUNTER
	/* ----------------------------------------------------------- */
	var nextYear = moment("2021-10-27 00:00").utcOffset(new Date().getTimezoneOffset())
	$('#nkm-event-counter').countdown(nextYear.toDate(), function (event) {
		var $this = $(this).html(event.strftime(''
			+ '<span class="nkm-event-counter-block"><span>%D</span> Days</span> '
			+ '<span class="nkm-event-counter-block"><span>%H</span> Hours</span> '
			+ '<span class="nkm-event-counter-block"><span>%M</span> Mins</span> '
			+ '<span class="nkm-event-counter-block"><span>%S</span> Secs</span>'));
	});


	/* ----------------------------------------------------------- */
	/*  3. MENU SMOOTH SCROLLING
	/* ----------------------------------------------------------- */

	//MENU SCROLLING WITH ACTIVE ITEM SELECTED

	// Cache selectors
	var lastId,
		topMenu = $(".nkm-menu"),
		topMenuHeight = topMenu.outerHeight() + 13,
		// All list items
		menuItems = topMenu.find('a[href^=\\#]'),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function () {
			var item = $($(this).attr("href"));
			if (item.length) { return item; }
		});

	console.log(scrollItems);

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function (e) {
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 22;
		jQuery('html, body').stop().animate({
			scrollTop: offsetTop
		}, 1000);
		e.preventDefault();
	});

	$('.scroll-field .scroll').click(function (e) {
		//getting the second element of nav menu item
		var element = menuItems[1];
		//getting the id of the section element to which we want to scroll
		var id = $(element).attr("href");
		jQuery('html, body').stop().animate({
			scrollTop: $(id).offset().top - topMenuHeight + 22
		}, 500);
		e.preventDefault();
	});

	// Bind to scroll
	jQuery(window).scroll(function () {
		// Get container scroll position
		var fromTop = $(this).scrollTop() + topMenuHeight;

		// Get id of current scroll item
		var cur = scrollItems.map(function () {
			console.log($(this).attr('id'));
			console.log($(this).offset().top);
			console.log(fromTop);
			if ($(this).offset().top < fromTop)
				return this;
		});

		// Get the id of the current element
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
				.parent().removeClass("active")
				.end().filter("[href=\\#" + id + "]").parent().addClass("active");
		}
	})



	/* ----------------------------------------------------------- */
	/*  4. VIDEO POPUP
	/* ----------------------------------------------------------- */

	$('.nkm-video-play-btn').on('click', function (event) {

		event.preventDefault();

		$('.nkm-video-iframe-area').addClass('nkm-video-iframe-display');

	});

	// when click the close btn

	// disappear iframe window

	$('.nkm-video-close-btn').on('click', function (event) {

		event.preventDefault();

		$('.nkm-video-iframe-area').removeClass('nkm-video-iframe-display');

	});

	// stop iframe if it is play while close the iframe window

	$('.nkm-video-close-btn').click(function () {

		$('.nkm-video-iframe').attr('src', $('.nkm-video-iframe').attr('src'));

	});

	// when click overlay area

	$('.nkm-video-iframe-area').on('click', function (event) {

		event.preventDefault();

		$('.nkm-video-iframe-area').removeClass('nkm-video-iframe-display');

	});

	$('.nkm-video-iframe-area, .nkm-video-iframe').on('click', function (e) {
		e.stopPropagation();
	});


	/* ----------------------------------------------------------- */
	/*  5. SPEAKERS SLIDEER ( SLICK SLIDER )
	/* ----------------------------------------------------------- */

	$('.nkm-speakers-slider').slick({
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					slidesToShow: 1
				}
			}
		]
	});





	/* ----------------------------------------------------------- */
	/*  6. BOOTSTRAP ACCORDION 
	/* ----------------------------------------------------------- */

	/* Start for accordion #1*/
	$('#accordion .panel-collapse').on('shown.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
	});

	//The reverse of the above on hidden event:

	$('#accordion .panel-collapse').on('hidden.bs.collapse', function () {
		$(this).prev().find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
	});


	/* ----------------------------------------------------------- */
	/*  7. MOBILE MENU CLOSE 
	/* ----------------------------------------------------------- */

	jQuery('.nkm-menu').on('click', 'li a', function () {
		$('.nkm-navbar .in').collapse('hide');
	});







})(jQuery);




