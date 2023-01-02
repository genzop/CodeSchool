/*4.8 To the Lighthouse, Quick!
PIRATES AHOY! It’s time for the ranger-devs to get over to the Lighthouse and throw down! Our lighthouseRock object now has a new numRangers property to track how many rangers are fighting at the Lighthouse.

Your goal is to complete the addRanger function that takes in location, name, skillz, and station as parameters. Then we can pass in our lighthouseRock object as the location and start to add rangers.

	1. As rangers are added, increment the number of rangers at the location using its numRangers property.
	2. Add a property to the location using bracket notation that will be used to hold a ranger object. Specifically, each property will be named ranger1, ranger2, ranger3, etc. This will require string concatenation and the current value of the numRangers property.
	3. Now that you have your ranger<number> property, assign an object literal to it that contains properties for name, skillz, and station. Then assign values to those properties using the parameters that we pass in.
	4. Call your addRanger function three times with the appropriate arguments to add the following rangers, in order, to the location:

		name: "Nick Walsh", skillz: "magnification burn", station: 2
		name: "Drew Barontini", skillz: "uppercut launch", station: 3
		name: "Christine Wong", skillz: "bomb defusing", station: 1*/

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000]];

var lighthouseRock = {
  	gateClosed: true,
  	weaponBulbs: superBlinders,
  	capacity: 30,
  	secretPassageTo: "Underwater Outpost",
  	numRangers: 0
};

function addRanger(location, name, skillz, station) {
  	location.numRangers++; 
  	location["ranger" + this.numRangers] = {name: name,
                                     		skillz: skillz,
                                     		station: station};  
}

addRanger(lighthouseRock, "Nick Walsh", "magnification burn", 2);
addRanger(lighthouseRock, "Drew Barontini", "uppercut launch", 3);
addRanger(lighthouseRock, "Christine Wong", "bomb defusing", 1);