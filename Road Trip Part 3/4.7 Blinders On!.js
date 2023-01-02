/*4.7 Blinders On!
The ranger-devs want to upgrade Lighthouse Rock with new super-blinding light bulbs and remove the old existing bulbs.

The new superBlinders array and lighthouseRock object are provided. Each index of the superBlinders array contains a bulb name and its wattage within a sub-array.

	1. Completely remove the existing bulbs property from the lighthouseRock object.
	2. Add a weaponBulbs property to lighthouseRock and assign the superBlinders array as a value.
	3. Log the name value of the bulb with the highest wattage to the console. Use the correct index from the weaponBulbs property of the lighthouseRock object to access the correct name value.

Note: You do not need to change the provided code for the superBlinders array or the lighthouseRock object.*/

var superBlinders = [
  	["Firelight", 4000],
  	["Solar Death Ray", 6000],
  	["Supernova", 12000]
];

var lighthouseRock = {
  	gateClosed: true,
  	bulbs: [200, 500, 750],
  	capacity: 30,
  	secretPassageTo: "Underwater Outpost"
};

delete lighthouseRock.bulbs;
lighthouseRock.weaponBulbs = superBlinders;
console.log(lighthouseRock.weaponBulbs[2][0]);