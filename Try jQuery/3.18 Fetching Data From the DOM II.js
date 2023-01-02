/*3.18 Fetching Data From the DOM II
We want to show this discount to the user in the message we show after the "Book Now" button is clicked. Go ahead and change the content of message to Call 1-555-jquery-air for a $<discount> discount., and swap out <discount> for the discount price.*/

$(document).ready(function() {
  	$('button').on('click', function() {
    	var discount = $(this).closest('.tour').data('discount');
    	var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
    	$(this).closest('.tour').append(message);
    	$(this).remove();
  	});
});