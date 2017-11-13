/*1.6 From a While Loop to a For Loop II
Morph your previous while loop into a for loop that uses the same variable names. Remember, you’ll still need to declare the starting number of sheep and the number of months to print outside the loop. We’ve given you the starting number of sheep again, as well as the amount of months you’ll need to print out for use in the loop parameters. Here’s a solution for the previous while loop for reference:

	var numSheep = 4;
	var monthNumber = 1;
	var monthsToPrint = 12;

	while (monthNumber <= monthsToPrint) {
  		numSheep = numSheep * 4;
  		console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  		monthNumber++;
	}
*/

var numSheep = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++){
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}