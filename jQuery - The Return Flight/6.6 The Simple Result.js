/*6.6 The Simple Result
You're almost finished! All that's left is to change result.price to result in your application.js.*/

$(document).ready(function() {
  	$('button').on('click', function(){
    	var location = $('.location').text();
    	Vacation.getPrice(location).done(function(result){
      		$('.price').text(result);
    	});
  	});
});
