/*4.6 Moar Power!! Fight Pirates!!
The ranger-devs are happy with the modifications to the vehicles. They need one last modification, though, so that they can know what sort of firepower they are able to use on each vehicle.

Add a property called # of weapons to each vehicle using bracket notation. Then, consult the current objects and properties to assign the following values to the correct objects:

	1. There are 8 "Torpedoes".
	2. There are 4 "Lasers".
	3. There is 1 "Rear-Mounted Slingshot".*/

var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;

vehicle3["# of weapons"] = 8;
vehicle2["# of weapons"] = 4;
vehicle1["# of weapons"] = 1;