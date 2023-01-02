/*5.8 Animate I
Let's continue seeing what we can do to add more flavor to our tours page. When the mouse first goes over the .tour element, we need to show the price per night, .per-night, and to make it stand out. Let's animate() the opacity to be 1 in our same event handler. This allows us to fade the element in.*/

$(document).ready(function() {
  	$('.tour').on('mouseenter', function() {
    	$(this).addClass('highlight');
    	$(this).find('.per-night').animate({'opacity': '1'});
  	});
  	$('.tour').on('mouseleave', function() {
    	$(this).removeClass('highlight');
  	});
});
