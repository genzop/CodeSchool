/*3.23 New Filter III
There is one thing left to do, we need to remove the highlight class immediately after clicking a filter so we are only highlighting the correct elements. Another filter has been added to make things interesting. In both of these filters, remove the highlight class from anything that has it.*/

$(document).ready(function() {
  	$('#filters').on('click', '.on-sale', function() {
    	$('.highlight').removeClass('highlight');
    	$('.tour').filter('.on-sale').addClass('highlight');
  	});

  	$('#filters').on('click', '.featured', function() {
    	$('.highlight').removeClass('highlight');
    	$('.tour').filter('.featured').addClass('highlight');
	});
});
