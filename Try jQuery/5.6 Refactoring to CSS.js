/*5.6 Refactoring to CSS
We've extracted out our styles into a new CSS class called highlight. Go ahead and add this class when the .tour is moused over instead of using the css() method. Also, add another event handler for when the mouse leaves the .tour element to remove this class by watching for mouseleave.*/

$(document).ready(function() {
  	$('.tour').on('mouseenter', function() {
    	$(this).find('.photos').show();
    	$(this).addClass('highlight');
  	});
  	$('.tour').on('mouseleave', function() {
    	$(this).remove('highlight');
  	});
});