/*6.9 When() and Then()
You have two AJAX calls that are used to render an html page. The problem is that since the data gets back at different times, your html flickers and elements show up in different orders.

Use $.when() and .then() to refactor these two calls so that html gets rendered at the same time.*/

$(document).ready(function() {
  	$('button').on('click', function(){
    	var tour = $(this).parent();
    	var location = tour.data('location');
    	var resultDiv = tour.find('.results').empty();
    
    	$.when(
    		Vacation.getPrice(location),
    		Photo.getPhoto(location)  
    	).then(function(priceResult, photoResult){
   			$('<p>$'+priceResult+'</p>').appendTo(resultDiv);
      		$('<img />').attr('src', photoResult).appendTo(resultDiv);
    	});  
  	});
});