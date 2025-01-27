/*5.8 Creation with Prototypes II
It turns out that there are some fence posts that have special properties. Some have weathervanes, some have birdhouses, and some even have emergency lights. Here are the three new posts that we are going to work with:

	x: 0,
	y: -3,
	postNum: 8,
	connectionsTo: 10

	x: 6,
	y: 8,
	postNum: 9,
	connectionsTo: 10

	x: -2,
	y: 3,
	postNum: 10,
	connectionsTo: 8, 9

	1. Use Object.create and pass in genericPost as a prototype to create the new fence posts listed above, and assign them to post8, post9, and post10 variables that match their respective postNum property.
	2. After the posts have been created, use dot notation to assign all of the property values listed above. You can use x, y, and postNum properties to set the values for each post. Then use the sendRopeTo method to make the connections between posts.
	3. Now we can add new properties for special fence posts. Posts with an even-numbered y coordinate have a birdhouse, and therefore have a numBirds property initially set to 0.
	4. Posts that are connected to post9, but are not post9, have a property of weathervane initially set to "N".
	5. Posts with an even-numbered postNum have emergency lights, and therefore have a lightsOn property initially set to false.*/

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

var post8 = Object.create(genericPost);
var post9 = Object.create(genericPost);
var post10 = Object.create(genericPost);

post8.x = 0;
post8.y = -3;
post8.postNum = 8;
post8.sendRopeTo(post10);

post9.x = 6;
post9.y = 8;
post9.postNum = 9;
post9.sendRopeTo(post10) ; 

post10.x = -2;
post10.y = 3;
post10.postNum = 10;
post10.sendRopeTo(post8);
post10.sendRopeTo(post9);

post9.numBirds = 0;
post10.weathervane = "N";
post8.lightsOn = false;
post10.lightsOn = false;