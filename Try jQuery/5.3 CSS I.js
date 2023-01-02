/*5.3 CSS I
Let's try to make the .tour elements on this page stand out a bit more. Inside our event handler for the mouseenter event, set the background-color to #252b30 using the css() method.*/

$(document).ready(function() {
  	$('.tour').on('mouseenter', function() {
    	$(this).css('background-color', '#252b30');
  	});
});
