# jQuery(function($) {
#   $('#newCoffee a').click(function() {
#     alert('New coffee added');
#   });
# });

$ ->
  $('#newCoffee a').click ->
    alert 'New coffee added'