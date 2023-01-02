/*3.4 $.ajax with POST 
We're all set to start handling this form submission using Ajax. within the event handler, we'll need to do a few things. Make an ajax request to the /book URL on the server of type POST. Also pass in the contents of the form as the form data using serialize.*/

$(document).ready(function() {
  	$('form').on('submit', function(event) {
    	event.preventDefault();
    	$.ajax('/book', {
      		type: 'POST',
      		data: $('form').serialize()
    	});
  	});
});