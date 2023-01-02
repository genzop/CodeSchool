/*1.14 Immediately-Invoked Puzzler
Now the Poplar Puzzle-makers have sent you a puzzle with a new set of functions to use on that puzzle. To display your overwhelming array and function expression mastery, alert the answer to the following question:

	“What is obtained when the result of passing 9 into the fourth function of the puzzlers array is then passed into the function whose array index matches the result of passing 3 into the second function of the puzzlers array?”

To really impress them, the expression used in your alert should:

	1. Use just one line of code.

	2. Involve no manual calculation or hard-coded math on your part.

	3. Use indices of arrays to access functions.

	4. Use parentheses to pass in parameters to immediately-invoking functions.

Note:
	- The required answer is not an example of good style, nor is it intended as such.
	- The main point is to give you practice with the mechanics of arrays and function calls.*/

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

alert(puzzlers[puzzlers[1](3)]((puzzlers[3](9))));