/*2.15 Final Closed Values II
Now the Dev Girls need each shark to be matched with a corresponding target. A shark’s index in the listOfSharks array will match the index of the target that it is supposed to eliminate from listOfTargets.

	var listOfSharks = ["Sea Pain", "Great Wheezy",
                    	"DJ Chewie", "Lil' Bitey",
                    	"Finmaster Flex", "Swim Khalifa",
                    	"Ice Teeth", "The Notorious J.A.W."];

	var listOfTargets = ["icicle bat", "snow yeti",
                     	"killer penguin", "frost tiger",
                     	"polar bear", "iceberg",
                     	"blue witch", "wooly mammoth"];

Inside the makeTargetAssigner function:

	1. First, return an anonymous function that takes in a shark parameter.

	2. Inside the function that is being returned, create a for loop to loop through the sharks array.

	3. Inside the loop, find out if the current shark from the sharks array matches the shark name that is getting passed as a parameter.

	4. If those values match, build an alert message that produces the following output after calling the getTargetFor function:

		Hey, Ice Teeth!
		There've been blue witch sightings in our area!
		Time to take care of business!

Note: You do not need to edit the provided function call at the bottom. Just build out the makeTargetAssigner function to complete the challenge.*/

function makeTargetAssigner(sharks, targets) {
  
  	return function(shark){
    	for(var i = 0; i < sharks.length; i++){
      		if(shark == sharks[i]){
        		alert("Hey, " + sharks[i] + "!\n" +
              		"There've been " + targets[i] + " sightings in our area!\n" + 
              		"Time to take care of business!");
      		}
    	}
  	}  
}

var getTargetFor = makeTargetAssigner(listOfSharks, listOfTargets);
getTargetFor("Ice Teeth");