/*5.5 Show Photo
Let's see what the tour page would look like if we showed the .photos on mouseenter as well. Try using the show() method here to make it visible.*/

$(document).ready(function() {
  	$('.tour').on('mouseenter', function() {
	    $(this).css({'background-color': '#252b30', 'font-weight': 'bold'});
	    $(this).find('.photos').show();
  	});
});
