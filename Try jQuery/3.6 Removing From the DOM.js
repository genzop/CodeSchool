/*3.6 Removing From the DOM
We should probably remove that "Book Now" button until we can implement it. Go ahead and remove() it from the page.*/

var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
$('.usa').append(message);
$('.book').remove();