/*2.3 Refactor To Objects
The level1.js tab shows our code as it stood at the end of level 1, but isn't being loaded into the page. We have some pretty deep nesting of functions, and that makes our code a little tough to read. Let's start refactoring it into a JavaScript object. For starters, create a new function named init within our tour object.

Next, call the init method on the tour object from within the $(document).ready function. Lastly, move the existing code that's run on $(document).ready within level1.js into our new init method. This should be functionally the same, but now our code is moved into the tour object.*/

var tour = {
  	init: function(){
    	$("#tour").on("click", "button", function() {
    	  $.ajax('/photos.html', {
      		data: {location: $("#tour").data('location')},
      		success: function(response) {
        		$('.photos').html(response).fadeIn();
      		},
      		error: function() {
        		$('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      		},
      		timeout: 3000,
      		beforeSend: function() {
        		$('#tour').addClass('is-fetching');
      		},
      		complete: function() {
        		$('#tour').removeClass('is-fetching');
      		}
    	  });
  	  });
    }  
};
$(document).ready(function() {
  	tour.init();
});
