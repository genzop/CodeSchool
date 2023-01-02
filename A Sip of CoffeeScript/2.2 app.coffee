# $('#newCoffee a').click(function() {
#   var name = prompt('Name of coffee:');
#   alert("New coffee added: " + name);
# });

$('#newCoffee a').click ->
  name = prompt "Name of coffee:"
  alert "New coffee added: #{name}"
