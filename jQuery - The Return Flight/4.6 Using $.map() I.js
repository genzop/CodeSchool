/*4.6 Using $.map() I
Someone thought it would be a great idea to have a page which shows flights that are running late. You're going to need to use the $.map() function, lets first console.log() the data being passed to the $.map() callback to see what we're dealing with.*/

$('.update-available-flights').on('click', function() {
  	$.getJSON('/flights/late', function(result) {
    	$.map(result, function(flight, index){
      		return console.log(flight);
    	});
  	});
});