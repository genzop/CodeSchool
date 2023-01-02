# jQuery(function($){
#   $('.drink a').click(function(){
#     var newStyle = {
#       'color': '#F00',
#       'font-weight': 'bold'
#     };
#     $(this).css(newStyle)
#   });
# });

$ ->
  $('.drink a').click ->
    newStyle = 
      'color': '#F00'
      'font-weight': 'bold'
    $(@).css(newStyle)