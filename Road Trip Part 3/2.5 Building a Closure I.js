/*2.5 Building a Closure I
The Dev Girls at the Cold Closures Cove sometimes need to provide warnings to travelers about various obstacles that sometimes float into the Cove. They need you to prepare a very efficient warning maker that will allow them to create only the warnings they need, and only when they need it. Closures to the rescue!

They’ve started a function called warningMaker with a parameter called obstacle. Within this function, return an anonymous function that displays a specific alert message based on the specific obstacle encountered. The format of the message should be as follows:

	Beware! There have been <obstacle> sightings in the Cove today!

Note: You do not need to call the warningMaker function.*/

function warningMaker(obstacle) {
  return function (){
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!");
  };
}


