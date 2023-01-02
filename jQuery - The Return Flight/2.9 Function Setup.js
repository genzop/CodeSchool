/*2.9 Function Setup 
Now we're going to finish refactoring our code into the new Tour function. To accomplish this, we'll need to do quite a few things.

First, recreate an event listener within our Tour which will watch for clicks on any button contained in the passed in element and run the fetchPhotos function. Next, set this.el to the passed in el so that we'll be able access it later on. For now leave the fetchPhotos function empty, but make sure it's called when the button is clicked.*/

function Tour(el) {
  	this.el = el;
  
 	this.fetchPhotos = function() { 
    	$.ajax('/photos.html', {
      		data: {location: $("#tour").data('location')},
      		success: function(response) {
        		$('.photos').html(response);
      		},
      		error: function() {
        		alert('There was a problem fetching the latest photos. Please try again.')
      		},
      		timeout: 3000,
      		beforeSend: function() {
        		$('#tour').addClass('is-fetching');
      		},
      		complete: function() {
        		$('#tour').removeClass('is-fetching');
      		}
    	});
  	}
  
  	this.el.on("click", "button", this.fetchPhotos);
}

$(document).ready(function() { 
  	var paris = new Tour($('#paris'));
});