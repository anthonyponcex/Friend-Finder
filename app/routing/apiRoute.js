var friends = require("../data/friends.js")

//API ROUTES//
//===========================================================
//Route to display JSON of all possible friends
module.exports = function (app) {
	
app.get("/api/friends", function(req, res) {
	res.json(friends);
	console.log(friends);	
});


// Creates new friend -- takes in JSON input
app.post("/api/friends", function(req, res) {
	//variable to hold new friend into JSON
	var newFriend = req.body;

	//pushing newFriend into friend JSON
	friends.push(newFriend);

	//sending a response to newFriend var as JSON
	res.json(newFriend);

	//compatability logic
	var userScores = newFriend.scores;

	for (var i=0; i < req.body.length; i++) {
		var friendsScores = friends[i].scores;		
	};

	
		console.log(userScores);
	console.log(friendsScores);

});


};

	