/*5.9 Animate II
The price per night will now fade, but let's make it move a little as well. We can't use slideDown() for this with our animate() call, though. When the mouseenter event is triggered, animate() the top property to -14px in order to move it up a bit.*/

$(document).ready(function() {
  	$('.tour').on('mouseenter', function() {
    	$(this).addClass('highlight');
    	$(this).find('.per-night').animate({'opacity': '1',
                                        'top': '-14px'});
  	});
  	$('.tour').on('mouseleave', function() {
	    $(this).removeClass('highlight');
  	});
});
