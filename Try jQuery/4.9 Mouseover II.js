/*4.9 Mouseover II
Inside our new mouseenter event handler, call the slideToggle() method on the span tag within the picture description. You'll need to traverse down from the current element, $(this), and then find() the span tag.*/

$(document).ready(function() {
  	$('#tour').on('click', 'button', function() {
    	$('.photos').slideToggle();
  	});
  	$('.photos').on('mouseenter', 'li', function() {
    	$(this).find('span').slideToggle('.photos');
  	});
});


