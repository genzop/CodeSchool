/*6.3 Reusable AJAX
You have a piece of javascript code which uses an AJAX call to find the vacation price of cities. This code may be useful to use in a few different parts of your site. Lets go ahead and rewrite this to make it reusable.

Create a Vacation JavaScript object which contains a getPrice function which takes one argument: location. Add the AJAX call currently in the application.js file to the getPrice function. Make sure this function returns a promise. Our "Update Price" button won't call it yet, but we'll do that next.*/

var Vacation = {
  	getPrice: function(location){
    	var promise = $.ajax('/vacation/prices', {
      		data: {q: location}         
    	});   
    	return promise;
  	}
};