// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up Express
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up Express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Routing//
require("./app/routing/apiRoute.js")(app);
require("./app/routing/htmlRoute.js")(app);


//Start server
//----------------
app.listen(PORT, function() {
	console.log("App listening on Port " + PORT);
});

