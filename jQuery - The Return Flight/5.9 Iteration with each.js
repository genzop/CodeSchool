/*5.9 Iteration with each
Looks like the page loads without any errors, but it doesn't yet do anything. Within your plugin, loop through each object passed in and run console.log(this) within the loop.*/

$.fn.photofy = function() {
  	this.each(function() {
    	console.log(this);
	});
}

$(document).ready(function() {
  	$('.tour').photofy();
});
