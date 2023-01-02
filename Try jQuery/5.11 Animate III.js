/*5.11 Animate III 
Let's update our mouseleave handler to remove the .per-night price with a little style. Animate the price to a top of 0px and an opacity of 0 when the mouse leaves the .tour element, and make it happen with a 'fast' duration.*/

$(document).ready(function() {
  	$('.tour').on('mouseenter', function() {
    	$(this).addClass('highlight');
    	$(this).find('.per-night').animate({'top': '-14px', 'opacity': '1'}, 'fast');
  	});
  	$('.tour').on('mouseleave', function() {
    	$(this).removeClass('highlight');
    	$(this).find('.per-night').animate({'top': '0px', 'opacity': '0'}, 'fast');
  	});
});

