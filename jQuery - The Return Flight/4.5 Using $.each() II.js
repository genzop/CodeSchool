/*4.5 Using $.each() II
Lets clean up our code a bit. This AJAX call is pretty simple, and it only has a success callback, so lets use the $.getJSON() function to make the call instead.*/

$('button').on('click', function() {
  	$.getJSON('/cities/deals', function(result) {
      	$.each(result, function(index, dealItem) {
        	var dealElement = $('.deal-' + index);
        	dealElement.find('.name').html(dealItem.name);
        	dealElement.find('.price').html(dealItem.price);
      	});    
  	});
});