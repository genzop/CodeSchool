/*2.14 Final Closed Values I
Now that the danger zones and obstacles are in order and ready to be dealt with, the Dev Girls need your assistance with directing the Cold Closures Cove sharks to their custom-fitted lasers. That’s right. Lasers.

Sharks are supposed to be directed to the laser-strapping station that matches the index that their name is in within the sharkList array, which looks like this:

	["Sea Pain", "Great Wheezy", "DJ Chewie",
 	 "Lil' Bitey", "Finmaster Flex", "Swim Khalifa",
 	 "Ice Teeth", "The Notorious J.A.W."]

But they’ve got a problem with their assignLaser function. Something is up, and now there’s a traffic jam at the last shark’s station.

Figure out what happened and apply a fix from this section’s video lecture:

	1. Don’t change the position of the function inside the for loop.

	2. Instead of assigning to the stationAssignment variable, return the anonymous function.

	3. Remove the subsequently unnecessary lines with stationAssignment.

Note: You do not need to call the assignLaser function.*/

function assignLaser(shark, sharkList) {
   for (var i = 0; i < sharkList.length; i++) {
    if (shark == sharkList[i]) {
      return function() {
        alert("Yo, " + shark + "!\n" +
              "Visit underwater strapping station " +
              (i + 1) + " for your sweet laser.");
      };
    }
  }
}
