/*1.2 Changing Declarations to Expressions
Developers for the Forest of Function Expressions Theme Park have created a function declaration named forestFright, but they’ve decided not to keep the function in memory.
Convert the function from a named function declaration to an anonymous function expression and assign it to a variable called runAway.*/

var runAway = function() {
  	var toAlert = "";
  	for (var i = 0; i < 5; i++) {
    	toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  	}
  	alert(toAlert);
};