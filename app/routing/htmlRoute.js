var express = require("express")
var path = require("path");


//HTML ROUTES//
//========================================//
module.exports = function (app) {
//Route to display survey.html page
app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "/../public/survey.html"));
});
//Default home page route//
app.use("/", function(req, res) {
	res.sendFile(path.join(__dirname, "/../public/home.html"));
});

};

