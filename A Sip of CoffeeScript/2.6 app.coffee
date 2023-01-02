# $('.drink li').hover(function() {
#   $(this).find('span').show();
# }, function() {
#   $(this).find('span').hide();
# });

$('.drink li').hover ->
  $(@).find('span').show
, ->
  $(@).find('span').hide();
  
  