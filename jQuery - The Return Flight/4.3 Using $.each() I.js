/*4.3 Using $.each() I
Our site has a popup deals page. We need to write the javascript that will load the current available deals. Let's start out by looping over the result with the $.each() function. Within this loop, console.log() each item for now to get an idea of what the data looks like.*/

$('button').on('click', function() {
  	$.ajax('/cities/deals', {
    	success: function(result) {
      		$.each(result, function(index, city){
        		console.log(city);
      		});
    	}
  	});
});
