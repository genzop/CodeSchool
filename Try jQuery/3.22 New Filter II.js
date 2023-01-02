/*3.22 New Filter II
Now let's make these filters work! Inside our event handler, find all .tour elements and filter() for only those that have a class of .on-sale. Add a class of highlight to only these filtered tours on click.*/

$(document).ready(function() {
  	$('#filters').on('click', '.on-sale', function() {
    	$('.tour').filter('.on-sale').addClass('highlight');
  	});
});