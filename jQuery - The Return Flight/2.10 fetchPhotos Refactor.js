/*2.10 fetchPhotos Refactor
Unfortunately, we can't just copy our existing fetchPhotos method from level 1 straight into our function - we're going to need to make a few changes in order to make it work.

The biggest change is that we can't query the DOM directly -- instead we'll have to base all DOM queries off of el, the element representing the current tour.

Update the data option to take in the data from the current tour -- tour.el. Add a context option to the ajax call, giving it a context of tour. After that, within your callbacks, you'll be able to reference the current tour element using this.el rather than #tour. Lastly, instead of finding all .photos only find .photos within the current this.el element.*/

function Tour(el) {
  	var tour = this;
  	this.el = el;
  	this.photos = this.el.find('.photos');
  	this.fetchPhotos = function() {
    	$.ajax('/photos.html', {
      		data: {location: tour.el.data('location')},
      		context: tour,
      		success: function(response) {
       			this.photos.html(response).fadeIn();
      		},
      		error: function() {
        		this.photos.html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      		},
      		timeout: 3000,
      		beforeSend: function() {
        		this.el.addClass('is-fetching');
      		},
      		complete: function() {
        		this.el.removeClass('is-fetching');
      		}
    	});
  	};
  	this.el.on('click', 'button', this.fetchPhotos);
}

$(document).ready(function() { 
  	var paris = new Tour($('#paris'));
});