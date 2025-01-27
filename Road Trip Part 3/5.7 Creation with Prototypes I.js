/*5.7 Creation with Prototypes I
The cowboy-devs at the Plains of Prototypes have a new robotic fence post system for their pastures. This system allows immediate shifting of the fence posts to make a forced migration of the cows into different, healthier pastures for grazing.

The generic fence post object is provided in the challenge editor, starting at coordinates (0,0), which is the location of the main ranch.

Each new fence post will travel, on its own, out to the x and y coordinates assigned to it when a new object is generated. There it will send out robotically guided connection ropes to other fence posts to enclose a pasture.

It takes two ropes for fence posts to be connected. Each one sends a rope to the other using the sendRopeTo method. Then all the connections will be automatically stored in the connectionsTo array. Examine the genericPost prototype closely to see how the system is designed to work.

To test the creation of these new fence post objects, the cowboy-devs have a few requirements:

	1. Use Object.create and pass in genericPost as a prototype to create two new fence posts, and assign them to post1 and post2 variables.
	2. Use dot notation to send the first fence post to (-2, 4) with standard property modification. Then set its postNum value to 1.
	3. Use dot notation to send the second fence post to (5, 1) with standard property modification. Then set its postNum value to 2.
	4. Use the sendRopeTo method to connect both of the fence posts together.
*/

var genericPost = {
  	x: 0,
  	y: 0,
  	postNum: undefined,
  	connectionsTo: undefined,
  	sendRopeTo: function(connectedPost) {
    	if (this.connectionsTo == undefined) {
      		var postArray = [];
      		postArray.push(connectedPost);
      		this.connectionsTo = postArray;
    	} else {
      		this.connectionsTo.push(connectedPost);
    	}
  	}
};

var post1 = Object.create(genericPost);
var post2 = Object.create(genericPost);

post1.x = -2;
post1.y = 4;
post1.postNum = 1;

post2.x = 5;
post2.y = 1;
post2.postNum = 2;

post1.sendRopeTo(post2);
post2.sendRopeTo(post1);
