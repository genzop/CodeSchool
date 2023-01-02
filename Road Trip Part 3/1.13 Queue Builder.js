/*1.13 Queue Builder
The devs at Poplar Puzzles would like you to treat an array of functions like a Queue, passing the result of each function into the next until the Queue is empty. They’ve sent you the puzzlers Queue of functions, and the following instructions:

	1. Build a function and assign it to a variable named applyAndEmpty.

	2. The function should take in an input number and a queue of functions as parameters.

	3. Using a for loop, call the functions in the queue in order with the input number, where the results of each function becomes the next function’s input.

	4. Once done this loop, return from applyAndEmpty the final function’s result. Additionally, the queue should be empty at this point.
	
	5. Lastly, call the applyAndEmpty function using the provided start variable and the puzzlers Queue as arguments, and alert the result.*/

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];
var start = 2;

var applyAndEmpty = function(input, queue){
  var queueLength = queue.length;
  for(var i = 0; i < queueLength; i++){
    input = queue.shift()(input);
  }
  return input;
};

alert(applyAndEmpty(start, puzzlers));