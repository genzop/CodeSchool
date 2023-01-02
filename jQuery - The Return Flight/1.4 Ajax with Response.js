/*1.4 Ajax with Response
Now that we're making an Ajax request to the server, we need to do something with the response. Add a success callback handler to the $.ajax call that will take the .photos element and insert the contents of the response into the html() method. Then call fadeIn() on it so that it will appear on the screen.*/

$(document).ready(function() { 
  	$('#tour').on('click', 'button', function() { 
    	$.ajax('/photos.html', {
           	success: function(response){
             	$('.photos').html(response).fadeIn();
    		}
    	});
  	});
});

