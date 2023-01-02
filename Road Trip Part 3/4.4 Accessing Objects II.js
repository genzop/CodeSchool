/*4.4 Accessing Objects II
Excellent, the vehicle data structures are ready!

Now the ranger-devs have asked you to build a findVehicle function that will accept a vehicle name and list of vehicle objects, and return the current storage location of the requested vehicle.

	1. Put all the vehicle objects in a vehicles array. Use the array literal syntax and pass in each of the vehicle variable names.
	2. Build a function expression assigned to a findVehicle variable, which accepts name and list parameters for the name of the individual vehicle sought and the full array of vehicles.
	3. Inside the findVehicle function, use a for loop to loop through all of the vehicles.
	4. if the type of the current object in the list matches the name parameter, then return the current object’s storedAt location.
	5. Call the findVehicle function and pass in the correct arguments to find the storage location of the "Submarine".*/

var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

var vehicles = [vehicle1, vehicle2, vehicle3];
var findVehicle = function (name, list){
  	for(var i = 0; i < list.length; i++){
    	if(list[i].type == name){
      		return list[i].storedAt;
    	}
  	}
};

findVehicle("Submarine", vehicles);