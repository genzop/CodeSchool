# $('.drink li').mouseenter(function() {
#   $(this).find('span').show();
# });
# $('.drink li').mouseleave(function() {
#   $(this).find('span').hide();
# });

$('.drink li').mouseenter ->
  $(@).find('span').show()
  
$('.drink li').mouseleave ->
  $(@).find('span').hide()