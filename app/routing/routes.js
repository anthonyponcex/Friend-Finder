var express = require("express");
var router = express.Router();

//API ROUTES//
//===========================================================
//Route to display JSON of all possible friends

app.get("/api/friends"), function(req, res) {
	for (var i = 0; i < friends.routeName) {
		return res.json(friends);
	}
	console.log(friends)

	
});

//Creats new friend -- takes in JSON input
app.post("/api/friends"), function (req, res) {
	//variable to hold new friend into JSON
	var newFriend = req.body;

	//formatting newFriend to lowercase, 
	newFriend.routeName = newFriend.replace([[/\s+/g, ""]]).toLowerCase();

	console.log(newFriend);

	//pushing newFriend into friend JSON
	friend.push(newFriend)

	//sending a response to newFriend var as JSON
	res.json(newFriend);

	//compatibility logic//
	//for loop to go through friend array
	for (var i = 2; i < friend.length; i++) {
		//if users
		if
	}

}

//HTML ROUTES//
//========================================//

//Default home page route//
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

//Route to display survey.html page
app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "survey.html"));
});

module.exports = router; 