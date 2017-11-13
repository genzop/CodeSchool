/*4.14 Calling Function Properties II
A new shipment of super-blinding bulbs just came in!

Use the addBulb function to add these three new bulbs to the list of super-blinders available at Lighthouse Rock.

	name: "Blasterbright"
	wattage: 5000

	name: "Sight Slayer"
	wattage: 1800

	name: "Burner of Souls"
	wattage: 7500
*/

lighthouseRock.addBulb = function(name, wattage) {
  	this.weaponBulbs.push([name, wattage]);
};

lighthouseRock.addBulb("Blasterbright", 5000);
lighthouseRock.addBulb("Sight Slayer", 1800);
lighthouseRock.addBulb("Burner of Souls", 7500);