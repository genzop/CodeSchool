/*3.20 Better On Handlers 
There is a small problem with the way our on() handler is being used. Currently, it is targeting all of the <button> elements on the screen. Refactor the on() handler to only target <button> elements within a .tour by using the selector argument of the on() method.*/

$(document).ready(function() {
  	$('.tour').on('click', 'button', function() {
    	var tour = $(this).closest('.tour');
    	var discount = tour.data('discount');
    	var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
    	tour.append(message);
    	$(this).remove();
  	});
});