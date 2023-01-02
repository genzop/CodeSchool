/*3.5 Adding to the DOM II
On second thought, maybe we should append() our <span> to the bottom of the .usa element. Let's change the code to add it there instead.*/

var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
$('.usa').append(message);