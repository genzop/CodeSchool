/*3.14 Relative Traversing II
It looks like someone changed our HTML. Now the <button> is inside a <div> tag. We don't want the message to go inside the <div> tag though, we want it to go at the bottom of the <li> element. Instead of using after(), let's change our code to find the closest() .tour element and append() the message to the bottom of it.*/

$(document).ready(function() {
  	$('button').on('click', function() {
    	var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    	$(this).closest('.tour').append(message);
    	$(this).remove();
  	});
});
