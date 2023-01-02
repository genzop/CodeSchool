/*4.19 Link Events II
When this link is clicked, show the photos for the clicked tour by traversing to it using closest() and find() then sliding it down by using slideToggle().*/

$(document).ready(function() {
  	$('.see-photos').on('click', function() {
    	$(this).closest('.tour').find('.photos').slideToggle();
  	});
});