/*3.4 Pop-Up Windows III
With the userAge variable, we can ensure that the user has entered their age correctly. Use a pop-up window function to confirm the user entry with the following message:

	"You entered <age>. Is this correct?"

Then store the result of the confirmation in a variable called ageIsCorrect. When you submit your code, enter your age in the prompt window, and then use the confirmation to select whether the entry is correct or incorrect.

Note: You do not need any loops or conditionals to complete this challenge.*/

var userAge = prompt("What's your age, user?");
var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");