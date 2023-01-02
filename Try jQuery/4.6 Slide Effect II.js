/*4.6 Slide Effect II
The photos will now be shown, but we have no way of hiding them. Let's change this to use slideToggle so that the photos will be hidden if they click again.*/

$(document).ready(function() { 
  	$("#tour").on('click', 'button', function() { 
    	$('.photos').slideToggle();
  	});
});