/*4.5 Slide Effect I 
Inside the click event handler, show the .photos element by querying the DOM for it and calling the slideDown() method.*/

$(document).ready(function() {
  	$('#tour').on('click', 'button', function() {
    	$('.photos').slideDown();
  	});
});
