/*2.6 Creating a Function
Let's get our feet wet with how functions work by creating a function which will represent a Tour. Remember, this function should start with a capital letter and be defined outside of $(document).ready().

Then, inside of $(document).ready(), create a new instance of the object created by the Tour function. When that new Tour is created, log a message to the console using console.log.*/

$(document).ready(function() { 
	var argentina = new Tour();
});

function Tour(){
  	console.log("Welcome to Argentina!");
}