/*4.16 Another Event Handler
Let's write a new event handler for the #nights form field we've been working with. When the focus event is triggered, set the number of #nights to a value of 7.*/

$(document).ready(function() {
  	$('#nights').on('keyup', function() {
    	var nights = +$(this).val();
    	var dailyPrice = +$(this).closest(".tour").data("daily-price");
    	$('#total').text(nights * dailyPrice);
    	$('#nights-count').text($(this).val());
  	});
  	$('#nights').on('focus', function(){
    	$(this).val(7);
  	});
});