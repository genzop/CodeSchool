/*5.14 Overriding Prototypal Methods II
The cowboy-devs have asked for an improved toString method for their fence posts. Here is an example of the string message they want to generate:

	Fence post #10:
	Connected to posts:
	11
	12
	13
	Distance from ranch: 5 yards

	1. Begin by creating a function to override the toString method on the Fencepost prototype. The function won’t need to take any parameters.
	2. Inside the function, initialize a list variable to an empty string. We can use list to keep track of connected posts.
	3. Loop through the connectionsTo array with a for loop.
	4. Inside your for loop, concatenate every postNum in the connectionsTo array on to the list string.
	5. Lastly, return a string message in the format above with the correct postNum, connections list, and distance value. The constructor and all of your previous prototype additions are provided for you as a reference for property names and procedures.
*/

function Fencepost(x, y, postNum) {
  	this.x = x;
  	this.y = y;
  	this.postNum = postNum;
  	this.connectionsTo = [];
}

Fencepost.prototype = {
  	sendRopeTo: function(connectedPost) {
    	this.connectionsTo.push(connectedPost);
  	},
  	removeRope: function(removeTo) {
    	var temp = [];
    	for (var i = 0; i < this.connectionsTo.length; i++) {
      		if (this.connectionsTo[i].postNum != removeTo) {
        		temp.push(this.connectionsTo[i]);
      		}
    	}
    	this.connectionsTo = temp;
  	},
  	movePost: function(x, y) {
    	this.x = x;
    	this.y = y;
  	},
  	valueOf: function() {
  		return Math.sqrt(this.x * this.x + this.y * this.y);
  	}
};

Fencepost.prototype.toString = function(){
  	var list = "";
  	for(var i = 0; i < this.connectionsTo.length; i++){
    	list += connectionsTo[i] + "\n";
 	}
  	return "Fence post #" + this.postNum + ":\n" + 
    	   "Connected to posts:\n" + list + 
    	   "Distance from ranch: " + this.valueOf() + " yards";
};