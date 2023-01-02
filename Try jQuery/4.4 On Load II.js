/*4.4 On Load II
After the DOM has loaded, let's add an event handler to watch for a click on button elements. Just to make sure this doesn't impact anything else on the page, only watch for clicks on buttons within the #tour element.*/

$(document).ready(function() {
  	$('#tour').on('click','button', function(){
    
  	});
});
