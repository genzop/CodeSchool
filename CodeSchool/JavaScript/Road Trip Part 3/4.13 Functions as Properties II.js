/*4.13 Functions as Properties II
It looks like ranger4 has a station assignment at Lighthouse Rock, but now there aren’t enough super-blinding bulbs for everyone.

The ranger-devs want you to build a new function property for lighthouseRock that adds a new super-blinding bulb to the weaponBulbs array, complete with a name and insane wattage.

	1. Create a new addBulb function property for the lighthouseRock object, but don’t add it directly inside the object. Instead, add it on the outside of the lighthouseRock object.
	2. Pass in name and wattage as parameters.
	3. Push any new bulb to the weaponBulbs array. Notice how the data is arranged and indexed in the superBlinders array. That means we’re going to need to push a sub-array with the name and wattage.*/

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
  	ranger4: {name: "Jordan Wade", skillz: "dual-wield hand crossbow", station: 4},
  	addRanger: function(name, skillz, station) {
    	this.numRangers++;
    	this["ranger" + this.numRangers] = {
      		name: name,
      		skillz: skillz,
      		station: station
    	};
  	}
};

lighthouseRock.addBulb = function(name, wattage){
  	this.weaponBulbs.push([name, wattage]);
};