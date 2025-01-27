/*5.9 Iteration over Array Contents
Build out the numStrings function using a for loop that counts all of the strings in the array parameter called list.

	1.Inside the function, set up a count variable and initialize it to a value of 0. We can use this variable to keep track of the number of strings.

	2.Use a for loop to loop through the list array.

	3.If the typeof the current array index value is equal to "string", then increment the count variable.
	
	4.Outside the for loop, return the count variable with the total amount of strings found.*/

function numStrings(list) {
  var count = 0;
  for(var i = 0; i < list.length; i++){
    if(typeof(list[i]) == "string"){
      count++;
    }
  }
  return count;
}