/*4.21 Event Parameter II
Let's add to this so that we prevent the browser from jumping to the top of the page when the link is clicked as well.*/

$(document).ready(function() {
  	$('.see-photos').on('click', function(event) {
    	event.stopPropagation();
    	event.preventDefault();
    	$(this).closest('.tour').find('.photos').slideToggle();
  	});
  	$('.tour').on('click', function() {
	    alert('This event handler should not be called.');
  	});
});