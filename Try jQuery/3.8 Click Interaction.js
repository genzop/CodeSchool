/*3.8 Click Interaction
We're making progress on our page, and it's close to being useful. The next step will be moving the code we have been working on into a click handler. Let's start by wrapping all of our previous code in a click handler for any <button> elements using the on() method.*/

$('.book').on('click', function(){
	var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
	$('.usa').append(message);
	$('button').remove();
});