/*2.11 Highway to the Danger Zones
The Dev Girls need you to store each location so that a list of danger zones for each obstacle can be reported with every new warning.

Inside the warningMaker function:

	1. Store each location in an array called zones.

	2. Add each zone to the list string.

	3. Report the list of danger zones with the alert message in this format:

	Beware! There have been <obstacle> sightings in the Cove today!
	<number> have been spotted at the <location>!
	This is alert #<count> today for <obstacle> danger.
	Current danger zones are:
	<zone1>
	<zone2>
	<zone3>
	...
*/

function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    zones.push(location);
    for(var i = 0; i < zones.length; i++){
     list += "\n" + zones[i];
    }       
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" +
          number + " have been spotted at the " + location + "!\n" +
          "This is alert #" + count + " today for " + obstacle + " danger.\n" +
          list);
  };
}