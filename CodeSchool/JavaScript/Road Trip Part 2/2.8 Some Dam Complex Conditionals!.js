/*2.8 Some Dam Complex Conditionals!
The people at the Hoover Dam have called you back, and would like a program that shows what happens when only the even numbered turbines are turned on. And they want it all in just one for loop.

With a set of complex conditional statements inside the loop, construct a way to only turn on even numbered turbines. Remember our power output situation:

	- Generators 1 through 4 produce 62 MW.
	- Generators 5 through 19 produce 124 MW.

The output should follow this format:

	Generator #1 is off.
	Generator #2 is on, adding 62 MW, for a total of 62 MW!

We’ve given you some starting variables to use in your build. Within your loop, consider the possible scenarios when building your conditions:

	- The Generator provides 62 MW of power.
	- The Generator provides 124 MW of power.
	- The Generator is off.*/

var totalGen = 19;
var totalMW = 0;
for(var currentGen = 1; currentGen <= totalGen; currentGen++){
  if(currentGen < 5){
    if(currentGen % 2 == 0){
      totalMW += 62;
      console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
    }else{
      console.log("Generator #" + currentGen + " is off.");
    }
  }else{
    if(currentGen % 2 == 0){
      totalMW += 124;
      console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
    }else{
      console.log("Generator #" + currentGen + " is off.");
    }
  }  
}