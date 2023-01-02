/*3.10 On Page Load
Our code seems to have an issue - it doesn't always work when the page is loaded. Wrap all of this code in a $(document).ready() block so that it won't run until the DOM has loaded.*/

$(document).ready(function(){
	$('button').on('click', function() {
  	var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
  	$('.usa').append(message);
  	$('button').remove();
	});
});