/*1.9 Expressions Inside Arrays
The folks over at Poplar Puzzlers need an array of functions for one of their puzzles. They’ve requested your help in making the array, which they would like to be called puzzlers. The cells of the array should each contain a function, and these functions–well, what they return–are listed here in order. Each function has one parameter. Note input below represents the parameter, and you will need to convert the math formulas to JavaScript:

	1. Returns 3 * input - 8
	2. Returns (input + 2)3
	3. Returns input2 - 9
	4. Returns input % 4

Use your knowledge of arrays and anonymous function expressions to build this array of functions.

Note: Use parentheses with your return statements if you’re having trouble with the order of operations.*/

var puzzlers = [function(input){
  					return 3 * input - 8;
				},
                function(input){
                  	return Math.pow(input + 2, 3);
                },
                function(input){
                  	return Math.pow(input, 2) - 9;
                },
                function(input){
                  	return input % 4;
                }];