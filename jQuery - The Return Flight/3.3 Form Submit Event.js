/*3.3 Form Submit Event
Here's a form we used in Try jQuery. As you change the number of nights, we show the updated estimate of the trip cost.

What we didn't do was add a way to submit the form! Let's go ahead and add a listener for submit on the form which will run a function. This function should accept one parameter - the form submission event. Call preventDefault on this event to stop the browser from following the form submission. We'll write the ajax call in this event handler later.*/

$(document).ready(function() {
  	$('form').on('submit', function(event) {
    	event.preventDefault();
  	});
});

