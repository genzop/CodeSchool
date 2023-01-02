/*5.13 Internal Triggers
When we're viewing photos, there's a link that comes up to 'Hide Tour'. Within the plugin, watch for click on this link, .hide-tour. When it is clicked, call fadeOut() on the tour and remove all events namespaces to photofy.*/

$.fn.photofy = function(options) {
  	this.each(function() {
    	var show = function(e) {
      		e.preventDefault();
      		settings.tour
            		.addClass('is-showing-photofy')
              		.find('.photos')
              		.find('li:gt('+(settings.count-1)+')')
              		.hide();
    	}
    	var settings = $.extend({
      		count: 3,
      		tour: $(this)
    		}, options);
    	settings.tour.on('click.photofy', '.see-photos', show);
    	settings.tour.on('show.photofy', show);
    
    	settings.tour.on('click.photofy', '.hide-tour', function(event){
      		event.preventDefault();
      		settings.tour.fadeOut().off('.photofy');
    	});
  	});
}

$(document).ready(function() {
  	$('.tour').photofy({ count: 1});
	
  	$('.show-photos').on('click', function(e) {
    	e.preventDefault();
    	$('.tour').trigger('show.photofy');
  	});
});

