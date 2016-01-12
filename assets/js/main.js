/**
 * Main JS file for John behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
	'use strict';

	var $document = $(document);

	$document.ready(function () {

		var getNavHeight = function () {
			var $navItems = $('.nav-main li'); 

			return ($navItems.length + 1) * $navItems.eq(0).height();
		};

		var navH = getNavHeight(),
			$nav  = $('.nav-main');

		$('.nav-switch').on('click', function(e){
			e.preventDefault();
			$nav.toggleClass('open');
			if($nav.hasClass('open')) {
				$nav.css('max-height', navH);
			} else {
				$nav.css('max-height', '2rem');
			}
		});

	});

	
})(jQuery);
