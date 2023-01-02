/*4.17 Enumeration I
The devs at Lighthouse Rock have received a shipment of spearguns for use in the battle against the pirates, and they need to know which spearguns have arrived.

	1. Build a function called listGuns that accepts a guns object as a parameter.
	2. Inside that function, use a for in loop to loop through each speargun in the guns object.
	3. Log each speargun in to the console.
	4. After your function is built, call listGuns and pass in the rockSpearguns object.
*/

var rockSpearguns = {
  	Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  	Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  	Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  	Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  	"The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

var listGuns = function(guns){
  	for (var speargun in guns){
    	console.log(speargun);
  	}
};

listGuns(rockSpearguns);