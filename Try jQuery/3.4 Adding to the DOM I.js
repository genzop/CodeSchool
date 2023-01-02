/*3.4 Adding to the DOM I
Let's add the phone number immediately before() the "Book Now" button. You can check out the HTML of the rendered page by clicking on the HTML tab below.*/

var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
$('.book').before(message);
