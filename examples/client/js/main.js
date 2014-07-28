$(document).ready(function() {

	var header = document.querySelector('.site-header'); 
	var headroom = new Headroom(header, {
		offset: $(window).height() + 100, 
		tolerance: 15
	}); 
	headroom.init(); 

	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	};

	var changeNavItems = debounce(function() {
		if ($(window).scrollTop() > $(window).height()) {
			$('.site-navigation-list').addClass('hidden'); 
			$('.page-navigation-list').removeClass('hidden'); 
		}
		else {
			$('.site-navigation-list').removeClass('hidden'); 
			$('.page-navigation-list').addClass('hidden'); 
		}
	}, 50); 

	$(document).scroll(changeNavItems); 



}); 