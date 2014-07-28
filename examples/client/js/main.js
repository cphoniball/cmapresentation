$(document).ready(function() {

	var header = document.querySelector('.site-header'); 
	var headroom = new Headroom(header, {
		offset: 50, 
		tolerance: 15
	}); 
	headroom.init(); 

}); 