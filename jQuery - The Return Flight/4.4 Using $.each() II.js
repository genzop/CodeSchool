/*4.4 Using $.each() II
Ok, now that we can see what our data looks like, lets go ahead and put the data into our html. We have HTML already created for each deal, so we can use the index within the each loop to locate the deal DOM node to update. Update the name and the price of each deal.*/

$('button').on('click', function() {
  	$.ajax('/cities/deals', {
    	success: function(result) {
      		$.each(result, function(index, dealItem) {
       			var deal = $('.deal-' + index);
        		deal.find('p').html(dealItem.price);
        		deal.find('h3').html(dealItem.name);
      		});
    	}
  	});
});