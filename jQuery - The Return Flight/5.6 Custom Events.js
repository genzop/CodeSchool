/*5.6 Custom Events
What if we wanted to run these in a specific order? By default jQuery will run them in the order they are declared, but we could also control the order by triggering one event from the other.

Change the click.weather event to a new custom event, no longer listening for click. Trigger this event from within the click.photos event handler.*/

$(document).ready(function(){
  	// Get Weather
  	$('button').on('show.weather', function() {
    	var results = $(this).closest('li').find('.results');
    	results.append('<p>Weather: 74&deg;</p>');
    	$(this).off('show.weather');
  	});
  
  	// Show Photos
  	$('button').on('click.photos', function() {
    	var tour = $(this).closest('li');
    	var results = tour.find('.results');
    	results.append('<p><img src="/assets/photos/'+tour.data('loc')+'.jpg" /></p>');
    	$(this).trigger('show.weather');
    	$(this).off('click.photos');
  	});
});