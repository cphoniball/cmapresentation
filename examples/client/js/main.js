$(document).ready(function() {

	// headroom initialization
	var header = document.querySelector('.site-header'); 
	var headroom = new Headroom(header, {
		offset: $(window).height() + 100, 
		tolerance: 15
	}); 
	headroom.init(); 

	// stellar initialization

	// position property plugin from https://gist.github.com/haydenbleasel/9301427
	$.stellar.positionProperty.transfade = {
	  setPosition: function(element, newLeft, originalLeft, newTop, originalTop) {
	    var distance = newTop - originalTop;
	    var rate = $(window).height() / 5;
	    element.css('transform', 'translate3d(0, ' + distance + 'px, 0').css('opacity', 1 - (distance / rate));
	  }
	};

	$.stellar({
		positionProperty: 'transfade'
	});

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

	// mobile navigation click handler

	$('.mobile-nav-menu').click(function(event) {
		$('.nav-wrapper').toggleClass('active'); 
	}); 

	// load in images only when necessary 
	if ($(window).width() > 992) {
		$('.headshot-img').each(function() {
			var url = $(this).attr('data-src'); 
			$(this).attr('src', url); 
		}); 
	} 

}); 