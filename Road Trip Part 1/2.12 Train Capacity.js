/*2.12 Train Capacity
Build a trainCapacity variable and set it to 60.
Construct a String called occupancy in the following format:

	3 passengers present, with 57 seats remaining.

In creating this String, use numPassengers to find the number of passengers present, and (trainCapacity - numPassengers) to find the number of seats remaining.*/

var numPassengers = 0;
numPassengers += 3;
var trainCapacity = 60;
var occupancy = numPassengers + " passengers present, with " + (trainCapacity - numPassengers) + " seats remaining.";