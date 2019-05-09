const express = require("express");
const db = require('diskdb');
const server = express();

const port = 4000;

db.connect('./data', ['tasks', 'boards']);
console.log("tasks:", db.tasks.find().length);
console.log("boards:", db.boards.find().length);


//  ==== BACKDOOR to DB ===========
/* 
	this backdoor is only used to
	modify the database schema easily

	steps:
	1. change structure in data.js which is more readable
	2. reset [collection_name].json to an empty []
	3. this code will reset diskdb into contents of data.js
	alternative:
	- maybe it's ok to modify [collection_name].json directly?
	-> check if it corrupts db
 */
const data = require("./data");
// console.log(data);

// load data.js to database once
if (!db.tasks.find().length) {
	db.tasks.save(data.tasks);
}

if (!db.boards.find().length) {
	db.boards.save(data.boards);
}

//  ==== end of BACKDOOR to DB =====

server.use(express.static("public"));

server.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

// all backend routes go here under /api
server.get("/api/json", (req, res) => {
	res.json({ name: "Lenny" });
});

// ========== API route handlers =======
server.get("/api/tasks", (req, res) => {
	res.json(db.tasks.find());
});

server.get("/api/boards", (req, res) => {
	res.json(db.boards.find());
});

server.listen(port, function () {
	console.log("Running server at " + port);
});
