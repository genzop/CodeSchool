/*2.3 Using Boolean Flags in Conditionals
The Badlands National Park would like to print specific messages depending on whether the park is open or closed.

They’ve asked you to modify their badlands.js file to print one of the following messages depending on the boolean value (true or false) of the variable parkIsOpen. We’ve already established for you the status of the variable for today.

Add a pair of conditional statements to print one of the following messages to the console based on the parkIsOpen variable:

	Welcome to the Badlands National Park! Try to enjoy your stay.

OR

	Sorry, the Badlands are particularly bad today. We're closed!*/

var parkIsOpen = true;

if(parkIsOpen){
  console.log("Welcome to the Badlands National Park! Try to enjoy your stay.");
}else{
  console.log("Sorry, the Badlands are particularly bad today. We're closed!");
}
