/*4.20 Event Parameter I
Change the first event handler so that the function takes an event parameter. Then use that event to stop the second event handler from being called.*/

$(document).ready(function() {
  	$('.see-photos').on('click', function(event) {
    	event.stopPropagation();
    	$(this).closest('.tour').find('.photos').slideToggle();
  	});
  	$('.tour').on('click', function() {
	    alert('This event handler should not be called.');
  });
});