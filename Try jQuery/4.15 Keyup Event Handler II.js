/*4.15 Keyup Event Handler II
Set the content of the #total element to the number the traveler has entered into the form field multiplied by the daily price.*/

$(document).ready(function() {
  	$('#nights').on('keyup', function() {
    	var nightsCount = +$(this).val();
      $('#nights-count').text(nightsCount);
 			var dailyPrice = +$(this).closest('.tour').data('daily-price');
      $('#total').text(nightsCount * dailyPrice);
  	});
});
