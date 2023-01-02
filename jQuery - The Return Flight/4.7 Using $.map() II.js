/*4.7 Using $.map() II 
Now you need to create the array of html elements. Create an array of li elements, each with the flightNumber and the time from the ajax result. Insert the resulting array into the .flight-times unordered list element.*/

$('.update-available-flights').on('click', function() {
  	$.getJSON('/flights/late', function(result) {
    	var flightElements = $.map(result, function(flightItem, index){
      		var flightsList = $('<li></li>');
      		$('<h3>'+flightItem.flightNumber+'</h3>').appendTo(flightsList);
      		$('<p>'+flightItem.time+'</p>').appendTo(flightsList);
      		return flightsList;
    	});
    	$('.flight-times').html(flightElements);
  	});
});
