/*2.5 Problem Solving with Conditionals
Back at Death Valley, scientists could see that the Sheep Situation would quickly get out of control. They have decided that, for any month the population climbs above 10000, half of the sheep will be sent away to other regions.

Inside our for loop, insert an if statement that:

	- Removes half of the sheep population if the number of sheep rises above 10000.
	- Prints the number of sheep being removed to the console in the following format:

		Removing <number> sheep from the population.

Note: To complete the challenge, you only need to insert the if statement. You do not need to create an else statement or change any of the provided code.*/

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
  if(numSheep > 10000){
    numSheep /= 2;
    console.log("Removing " + numSheep + " sheep from the population.");
  }
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}