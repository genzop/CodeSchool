/*1.5 $.get Shorthand
There's an easier way to write this code using the jQuery $.get shorthand method. Refactor this code to use $.get instead of $.ajax.*/

$(document).ready(function() {
  	$('#tour').on('click', 'button', function() {
    	$.get('/photos.html', function(response) {
        	$('.photos').html(response).fadeIn();      
    	});
  	});
});