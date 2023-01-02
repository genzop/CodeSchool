/*2.6 Using a Closure I
The Cove’s Dev Girls just got reports of icebergs in the area!

	1. Build a warning message by passing a "iceberg" obstacle as an argument into the warningMaker function.

	2. Store the results in a new variable called icebergAlert.
	
	3. Call the icebergAlert function to view the warning message.

Note: You do not need to change the existing warningMaker function.*/

function warningMaker(obstacle) {
  return function() {
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}

var icebergAlert = warningMaker("iceberg");
icebergAlert();