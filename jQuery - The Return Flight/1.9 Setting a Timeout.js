/*1.9 Setting a Timeout
We've been hearing reports from our travelers that sometimes they'll click on this button and nothing will happen - then a minute later they'll get a message saying There was a problem fetching the latest photos. Please try again.

Update the $.ajax request to timeout in 3 seconds to prevent this.*/

$(document).ready(function() {
  	var el = $("#tour");
  	el.on("click", "button", function() {
	    $.ajax('/photos.html', {
      		data: {location: el.data('location')},
      		success: function(response) {
        		$('.photos').html(response).fadeIn();
      		},
      		error: function() {
        		$('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      		},
      		timeout: 3000
    	});
  	});
});