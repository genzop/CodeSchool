/*5.5 Trigger
When testing out our code, we keep having to refresh the page and click on the button. Let's make things a little easier by triggering a click on the button when the page loads.*/

$(document).ready(function(){
  	// Get Weather
  	$('button').on('click.weather', function() {
	    var results = $(this).closest('li').find('.results');
    	results.append('<p>Weather: 74&deg;</p>');
    	$(this).off('click.weather');
  	});

   	// Show Photos
  	$('button').on('click.photos', function() {
    	var tour = $(this).closest('li');
    	var results = tour.find('.results');
    	results.append('<p><img src="/assets/photos/'+tour.data('loc')+'.jpg" /></p>');
    	$(this).off('click.photos');
  	});
  	$('button').trigger('click');
});