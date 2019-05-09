// import express and init server using express()
const express = require("express");
const db = require('diskdb');
const server = express();

const data = require("./data");
console.log(data);

db.connect('./data', ['tasks', 'boards']);
console.log("tasks:", db.tasks.find());
console.log("boards:", db.boards.find());

// load data.js to database once
if (!db.tasks.find().length) {
	db.tasks.save(data.tasks);
}

if (!db.boards.find().length) {
	db.boards.save(data.boards);
}




const port = 4000;

server.use(express.static("public"));

server.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

// all backend routes go here under /api
server.get("/api/json", (req, res) => {
	res.json({ name: "Lenny" });
});


server.get("/api/items", () => {

});

server.listen(port, function () {
	// Callback function
	console.log("Running server at " + port);
});
