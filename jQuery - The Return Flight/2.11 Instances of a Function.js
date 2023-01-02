/*2.11 Instances of a Function
On load, create another instance of a Tour, this time passing in a jQuery object for the #london element.*/

function Tour(el) {
  	var tour = this;
  	this.el = el;
  	this.fetchPhotos = function() { 
    	$.ajax('/photos.html', {
      		data: {location: tour.el.data('location')},
      		context: tour,
      		success: function(response) {
        		this.el.find('.photos').html(response).fadeIn();
      		},
      		error: function() {
        		this.el.find('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
      		},
      		timeout: 3000,
      		beforeSend: function() {
        		this.el.addClass('is-fetching');
      		},
      		complete: function() {
        		this.el.removeClass('is-fetching');
      		}
    	});
  	}
  	this.el.on('click', 'button', this.fetchPhotos);
}

$(document).ready(function() { 
  	var paris = new Tour($('#paris'));
  	var london = new Tour($('#london'));
});