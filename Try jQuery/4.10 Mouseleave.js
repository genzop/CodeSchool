/*4.10 Mouseleave
When the mouse leaves the li element, we'll want to hide the description of the photo as well. Write another event handler that targets the same elements, but calls slideToggle() only on the mouseleave event.*/

$(document).ready(function() {
  	$('#tour').on('click', 'button', function() {
    	$('.photos').slideToggle();
  	});
  	$('.photos').on('mouseenter', 'li', function() {
	    $(this).find('span').slideToggle();
  	});
  	$('.photos').on('mouseleave', 'li', function() {
    	$(this).find('span').slideToggle();
  	});
});
