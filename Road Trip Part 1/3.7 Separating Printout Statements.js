/*3.7 Separating Printout Statements
Now, let’s say that Old Faithful’s eruptions are kept as separate variables, as you can see in the oldFaithful.js file.
We’ve given you the avg variable for the average. Use the existing variables for eruption1, eruption2, eruption3, and numEruptions to calculate the average and assign it to the avg variable.
Then, print the message below to the console using a single console.log() statement and the avg variable.

	Average eruption height today: <average value goes here>
	
< and > indicate where our variable’s actual value should be placed. There should be no < > in your output, however. Be attentive to spacing as well.*/

var eruption1 = 112;
var eruption2 = 148;
var eruption3 = 160;
var numEruptions = 3;
var avg = (eruption1 + eruption2 + eruption3) / numEruptions;

console.log("Average eruption height today: " + avg);