/*1.7 Using Map With Arrays
Over at Maple Mountain, the dev team has received some name data from the customer terminal that they want to use to customize greetings for each of their passengers. But the data consists of an array with many subarrays where the first and last names of each passenger are split up.

They want to take the passengers array and convert those subarrays into strings that contain the first and last name for each passenger.

	1. Create a modifiedNames variable to store our new data.
	2. Assign passengers.map() to the modifiedNames variable. This will allow us to pass in a function to be used on every element in the array.
	3. Pass an anonymous function to map().
	4. The anonymous function should take in arrayCell as a parameter and use that to return a string with the first and last name for a passenger. In other words, if you were to pass in a ["Jason", "Millhouse"] array, the function should return a "Jason Millhouse" string.*/

var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(	function(arrayCell){
  										return arrayCell[0] + " " +	arrayCell[1];
								  	}
);