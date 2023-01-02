/*4.11 Named Functions
It looks like both of our event handlers on the .photos li elements are exactly the same! Let's go ahead and refactor these into a new function named showPhotos() and change our event handlers to reference that instead.*/

$(document).ready(function() {
  	$('#tour').on('click', 'button', showPhotos);

  	function showPhotos(){
    	$(this).find('span').slideToggle();
  	}
  
  	$('.photos').on('mouseenter', 'li', showPhotos);
  	$('.photos').on('mouseleave', 'li', showPhotos);
});
