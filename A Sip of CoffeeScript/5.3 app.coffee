# $.ajax({
#   url: '/coffeeList',
#   method: 'GET',
#   success: function(results) {
#     var i = null
#       , coffee = null;
#     for (i = 0; i < results.length; i++) {
#       coffee = results[i];
#       if (coffee.level > 3) {
#         $('ul.drink').append("<li>" + coffee.name + "</li>")
#       }
#     }
#   },
#   error: function(results) {
#     alert("failure " + results);
#   }
# });

$.ajax
  url: '/coffeeList'
  method: 'GET'
  success: (results) -> 
    $('ul.drink').append("<li>#{coffee.name}</li>") for coffee in results when coffee.level > 3
  error: (results) ->
    alert "failure #{results}"
    
      