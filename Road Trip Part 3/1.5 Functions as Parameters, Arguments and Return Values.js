/*1.5 Functions as Parameters, Arguments and Return Values
Well, it stands to reason that some people might not want to experience the Haunted Hickory House if the fear is significantly elevated on that day.

	1.Inside the fearMessage function expression, use conditional statements to check the already-generated fear value, and decide whether it is LOW or MEDIUM.
	
	2.Inside each conditional statement, return a specific confirm message in the following formats:

For fear levels less than 200:

	Fear Level: LOW
	Still wanna ride?

For fear levels 200 through and including 300:

	Fear Level: MEDIUM
	Think you'll make it?

Lastly, call the confirmRide function and pass in the fearMessage variable. Then assign the results of that function in a new variable called startRide.

Note: You do not need to change the existing code that’s provided for you in the challenge editor.*/

var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if(fear < 200){
    return confirm("Fear Level: LOW\n" + 
                   "Still wanna ride?");
  }else if(fear <= 300){
    return confirm("Fear Level: MEDIUM\n" + 
                   "Think you'll make it?");
  }
};

function confirmRide(confirmToGo) {
  return confirmToGo();
}

var startRide = confirmRide(fearMessage);
