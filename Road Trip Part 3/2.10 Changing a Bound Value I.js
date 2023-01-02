/*2.10 Changing a Bound Value I
The Cold Closures Cove devs are troubled by the amount of the warnings that have been coming back lately. Some obstacles have resulted in many warnings, while others have not.

They’d like you modify the warningMaker function to internally count the number of times a particular warning has been issued.

In order to accomplish this, you’ll need to set up a count variable and figure out how to increment it appropriately within the context of your functions.

Lastly, add that count to the alert message. The format of the message should match the following:

	Beware! There have been <obstacle> sightings in the Cove today!
	<number> have been spotted at the <location>!
	This is alert #<count> today for <obstacle> danger.
*/

function warningMaker(obstacle) {
  var count = 0;
  return function(number, location) {
    count ++;
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count + " today for " + obstacle + " danger.");
  };
}