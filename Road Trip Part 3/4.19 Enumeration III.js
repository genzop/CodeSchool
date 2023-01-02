/*4.19 Enumeration III
The ranger-devs liked your listGuns function so much that they want it added to the rockSpearguns object.

	1. Rather than moving it directly inside the object, use bracket notation to convert the function into a "listGuns" property on the rockSpearguns object.
	2. Since the rockSpearguns object will now contain more than just spearguns, change all instances of your enumeration reference word to property instead of speargun.
	3. And since we’re working from within the function now, we no longer need to pass in guns as a parameter. Remove it so that we’re not passing any parameters, and then replace any other instance of guns with this.
	4. In order to ensure that only spearguns get printed in the console message, add a conditional inside the for loop to make sure that the message only gets logged if this[property]["heft"] does not equal an undefined value.
	5. Lastly, change the function call at the bottom to use bracket notation along with parentheses to call the function on the rockSpearguns object.

Note: Use bracket notation throughout this challenge. No dot notation allowed!*/

var rockSpearguns = {
  	Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  	Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  	Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  	Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  	"The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

rockSpearguns["listGuns"] = function() {
  	for (var property in this) {
    	if(this[property]["heft"] != undefined){
    		console.log("Behold! " + property + ", with " + this[property]["heft"] + " heft!");
    	}
  	}	
};

rockSpearguns["listGuns"]();