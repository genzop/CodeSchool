/*2.12 Just Keep Track of It All!
Well, it’s nice for new travelers to know where the danger zones are, but what if some of them are thrill-seekers? They might actually want to visit the zones that have the highest number of obstacles.

We already have a list of danger zones, and now the Dev Girls at the Cove want you to add a number alongside each of the locations.

	1. Using the zones array, push a sub-array containing both the location and number for each obstacle.

	2. Inside the for loop, find a way to access those values from the zones array in order to add them to the list string.

	3. The final alert should be displayed in the following format:

	Beware! There have been <obstacle> sightings in the Cove today!
	<number> have been spotted at the <location>!
	This is alert #<count> today for <obstacle> danger.
	Current danger zones are:
	<zone1> (<number1>)
	<zone2> (<number2>)
	<zone3> (<number3>)
	...

Note: You do not need to change the alert message. You can complete the challenge by updating your zones array and then changing the for loop so that the correct values are added to the list string.*/

function warningMaker(obstacle) {
  	var count = 0;
  	var zones = [];
  	return function(number, location) {
    	count++;
    	var list = "";
    	zones.push([location, number]);
    	for (var i = 0; i < zones.length; i++) {
      		list += zones[i][0] + " (" + zones[i][1] + ")" + "\n";
    	}
   		alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" +
          number + " have been spotted at the " + location + "!\n" +
          "This is alert #" + count + " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  	};
}