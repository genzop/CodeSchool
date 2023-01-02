/*1.3 Ajax 
In the Try jQuery course, we learned how to slideDown() content based on a mouse click event. But that was for content that was already loaded in the HTML. Now, let's refactor that code to fetch and show the content using Ajax.

To get started, make an $.ajax request for the /photos.html URL inside the existing event handler. Don't worry about handling the success or error cases yet.*/

$(document).ready(function() {
  	$('#tour').on('click', 'button', function() {
    	$.ajax('/photos.html', function() {   
    	});
  	});
});
