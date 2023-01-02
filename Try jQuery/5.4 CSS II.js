/*5.4 CSS II
Let's set the font-weight to bold as well by passing in a JavaScript object to the css() method.*/

$(document).ready(function() {
  	$('.tour').on('mouseenter', function() {
    	$(this).css({'background-color': '#252b30',
                 	 'font-weight': 'bold'});
  	});
});