# $('#newCoffee a').click(function() {
#   var coffee, name;
#   name = prompt('Name of coffee:');
#   coffee = $("<li>" + name + "</li>");
#   $('ul.drink').append(coffee);
# });

$('#newCoffee a').click ->
  name = prompt "Name of coffee:"
  coffee = $("<li>#{name}</li>")
  $('ul.drink').append coffee
