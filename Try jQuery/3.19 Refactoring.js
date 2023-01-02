/*3.19 Refactoring
We're using this code twice: $(this).closest('.tour') to find the tour element. Refactor your code so that the element is set to a variable named tour, and then use that variable instead. This way, we only query the DOM once for the tours, instead of twice.*/

$(document).ready(function() {
  	$('button').on('click', function() {
    	var tour = $(this).closest('.tour');
    	var discount = tour.data('discount');
    	var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
    	tour.append(message);
    	$(this).remove();
  	});
});