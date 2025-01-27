/*4.11 Functions as Properties I
To improve organization and memory efficiency, the ranger-devs have asked you to make all functions that add objects to objects part of the destination location instead of being present in the global scope.

	1. Take the addRanger function from below and add it directly within the lighthouseRock object. The property name should still be addRanger.
	2. Refactor the addRanger method to use this instead of location.

		function addRanger(location, name, skillz, station) {
  			location.numRangers++;
  			location["ranger" + location.numRangers] = {
    			name: name,
    			skillz: skillz,
    			station: station
  			};
		}*/

var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000]];

var lighthouseRock = {
  	gateClosed: true,
  	weaponBulbs: superBlinders,
  	capacity: 30,
  	secretPassageTo: "Underwater Outpost",
  	numRangers: 3,
  	ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  	ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  	ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  	addRanger: function(name, skillz, station) {
  		this.numRangers++;
  		this["ranger" + this.numRangers] = {
    		name: name,
    		skillz: skillz,
    		station: station	
    	}
  	}
};	