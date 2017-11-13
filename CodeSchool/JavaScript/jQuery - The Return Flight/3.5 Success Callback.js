/*3.5 Success Callback
We check our server and we can see that the form is submitting successfully right now. Unfortunately, we're not showing the traveler anything yet!

Add a callback for success that will handle this case. Set the html of the .tour element as the result from the ajax request.*/

$(document).ready(function() {
  	$('form').on('submit', function(event) {
    	event.preventDefault();
    	$.ajax('/book', {
      		type: 'POST',
      		data: $('form').serialize(),
      		success: function(result){
        		$('.tour').html(result);
    		}
    	});
  	});
});