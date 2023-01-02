/*5.4 Prototypes III
To let mother cows rest, the cowboy-devs at the Plains of Prototypes have decided only to breed cows that have not given birth to any calves yet.

Now they want to add some functionality to the Object prototype itself. They’ve asked you to build two functions, in order:

	1. First, build a function called noCalvesYet, which will be added to the Object prototype.
	2. If the object type is a "cow" and also had no calves, the function should return a true value. Otherwise it should return a false value.
	3. Then, build a function called countForBreeding, which will be added to the Array prototype.
	4. In countForBreeding start by creating a numToBreed counter variable. The following steps refer to code in countForBreeding.
	5. Use a for loop to loop through all of the array values. You can use this to refer to the current list.
	6. Call noCalvesYet(). If it returns true for the current array value, then that means the cows are not moms, and we can increment the numToBreed counter variable.
	7. After your loop, this function should return the numToBreed count, which represents how many non-mother cows are available within any array.

Here is a list of cattle for your reference:

	var forestCows = [
  		{name: "Legolas", type: "calf", hadCalf: null},
  		{name: "Gimli", type: "bull", hadCalf: null},
  		{name: "Arwen", type: "cow", hadCalf: null},
  		{name: "Galadriel", type: "cow", hadCalf: null},
  		{name: "Eowyn", type: "cow", hadCalf: "Legolas"}
	];
*/

Object.prototype.noCalvesYet = function(){
  	if(this.type == "cow" && this.hadCalf == null){
    	return true;
  	}else{
    	return false;
  	}
};

Array.prototype.countForBreeding = function(){
  	var numToBreed = 0;
  	for(var i = 0; i < this.length; i++){
    	if(this[i].noCalvesYet()){
      		numToBreed++;
    	}
  	}
  	return numToBreed;
};