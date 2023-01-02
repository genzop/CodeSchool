/*4.8 Mouseover I 
Our tour page is going great! Let's add a bit more behavior to the page. Write an event handler that watches for mouseenter on any li elements within our .photos elements and runs an empty function. We'll implement the function later on.*/

$(document).ready(function() {
  	$('#tour').on('click', 'button', function() { 
    	$('.photos').slideToggle();
  	});
  	$('.photos').on('mouseenter', 'li', function(){
  	});
});
