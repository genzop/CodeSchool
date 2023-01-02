/*3.17 Fetching Data From the DOM I
Let's add a bit more incentive to get people to book these tours by offering a discount if they book today. Create a discount variable, and then assign the discount that is stored in the data() attribute on the .tour element. To assign the correct data value, traverse from the clicked button, $(this), to the closest .tour element, and then use data() to find the discount. We don't need to do anything with the discount variable just yet.*/

$(document).ready(function() {
  	$('button').on('click', function() {
    	var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    	var discount = $(this).closest('.tour').data('discount');
    	$(this).closest('.tour').append(message);
    	$(this).remove();
  	});
});
