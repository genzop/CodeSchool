/*4.18 Enumeration II
We’ve got our list of spearguns, but the problem is that the ranger-devs need to know what heft property each speargun has in order to know which one is right for their individual aiming styles.

Modify the log message in your listGuns function so that it follows the format below. You’ll need to use bracket notation strategically to access the heft property for the current speargun in guns.

	Behold! <speargun name>, with <heft style> heft!

Note: You only need to change the console message for this challenge, and you do not need to change any of the other provided code.*/

var rockSpearguns = {
  	Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  	Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  	Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  	Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  	"The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

function listGuns(guns) {
  	for (var speargun in guns) {
  		console.log("Behold! " + speargun + ", with " + guns[speargun]["heft"] + " heft!");
  	}
}

listGuns(rockSpearguns);
