/*4.14 Keyup Event Handler I
Within our event handler, update the number of nights in the #nights-count element to whatever the traveler entered in the #nights form field.*/

$(document).ready(function() {
  	$('#nights').on('keyup', function() {
    	var nightsCount = +$(this).val();
    	$('#nights-count').text(nightsCount);
  	});
});