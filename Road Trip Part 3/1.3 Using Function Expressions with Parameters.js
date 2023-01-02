/*1.3 Using Function Expressions with Parameters
The devs at the Death-Defying Dogwoods have determined a specific formula for the quantifiable amount of fear generated at the theme park. Their formula is based on the amount of people, the amount of rain, and the amount of sharks. Yes. Sharks.

	var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  	var rainFear = numPeeps * rainInInches;
  	var sharkFear = numSharks * numSharks * numSharks;
  	var totalFear = sharkFear + rainFear;
  	return totalFear;
	};

  1. Analyze the fearGenerated formula.
  2. Assign appropriate values to the people, rain, and sharks variables so that the amount of fear generated will be no less than 100, but no more than 400.
  3. Call the fearGenerated function and pass in the variables as arguments.
  4. Store the result of that function in a new variable called fear.

Note: You do not need to change the existing fearGenerated function.*/

var people = 10;
var rain = 2;
var sharks = 5;

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};

var fear = fearGenerated(people, rain, sharks);