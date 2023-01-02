/*1.8 Ajax with Errors
Sometimes things go wrong. Maybe our server went down, or the traveler visiting our page lost their internet connection and can no longer access our site.

Let's account for this case by adding an error callback that will set the contents of the .photos element to a message in an li element letting the traveler know that something went wrong and to try again. You can write whatever you'd like for this message.*/

$(document).ready(function() {
  	var el = $("#tour");
  	el.on("click", "button", function() {
    	$.ajax('/photos.html', {
      		data: {location: el.data('location')},
      		success: function(response) {
        		$('.photos').html(response).fadeIn();
      		},
      		error: function(){
      			$('.photos').html('<li>There was an error loading the photos</li>');
    		}
    	});
  	});
});