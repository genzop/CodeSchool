/*4.12 Calling Function Properties I
The pirates are really rough today! Add a new ranger to the lighthouseRock object by calling your addRanger method with the following information:

	name: "Jordan Wade"
	skillz: "dual-wield hand crossbow"
	station: 4
*/

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
  	addRanger: function (name, skillz, station){
    	this.numRangers++;
    	this["ranger" + this.numRangers] = {
      		name: name,
      		skillz: skillz,
      		station: station
    	};
  	}
};

lighthouseRock.addRanger("Jordan Wade", "dual-wield hand crossbow", 4);
