/*3.9 Acting on Click
Now that we have a working click handler for the "Book Now" buttons, let's try something different. Try changing the click handler to trigger when the .tour list item is clicked instead.*/

$('.tour').on('click', function() {
  	var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
  	$('.usa').append(message);
  	$('button').remove();
});
