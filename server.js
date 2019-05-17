const express = require("express");
const db = require('diskdb');
const body_parser = require('body-parser');

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


// ==== SERVER middlewares =====
// parse JSON (application/json content-type)
server.use(body_parser.json());

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

server.get("/api/tasks/:id", (req, res) => {
	res.json(db.tasks.find({ id: req.params.id }));
});

server.get("/api/boards", (req, res) => {
	res.json(db.boards.find());
});

// create one
server.post("/api/tasks", (req, res) => {
	const item = req.body;
	console.log('Adding new task: ', item);
	// add new item to db
	db.tasks.save(item);
	// return updated list
	res.json(db.tasks.find());
});

// patch
server.patch("/api/tasks/:id", (req, res) => {
	const itemId = req.params.id;
	const updates = req.body;

	console.log(`Patching item: ${itemId} with ${JSON.stringify(updates)} `);

	// TODO: on mongodb, use $set instead
	const item = db.tasks.findOne({ id: itemId });
	const newItem = {
		...item,
		...updates
	};

	db.tasks.update({ id: itemId }, newItem);

	console.log(newItem);

	// return updated item
	res.json(newItem);
});

// full task update
server.put("/api/tasks/:id", (req, res) => {
	const itemId = req.params.id;
	const item = req.body;

	console.log(`Editing item: ${itemId} with ${item} `);

	db.tasks.update({ id: itemId }, item);

	// return updated item
	res.json(JSON.stringify(item));
});

server.listen(port, function () {
	console.log("Running server at " + port);
});
