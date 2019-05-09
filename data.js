const data = {
	boards: [
		{
			id: "b1",
			name: "Regulate"
		},
		{
			id: "b2",
			name: "Debate"
		},
		{
			id: "b3",
			name: "Automate"
		},
		{
			id: "b4",
			name: "Effectuate"
		},
	],
	tasks: [
		{
			id: "t1",
			board: "b1",
			name: "Do the design",
			tags: [{ id: "t1", name: "react" }, { id: "t2", name: "js" }],
			previewText:
				"some content yada yade yado yadi yado some content yada yade yado yadi yado some content yada yade yado yadi yado some content yada yade yado yadi yado",
			// image: "https://dummyimage.com/25x25/111/bbb",
			image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
			estimate: 0.5
		},
		{
			id: "t2",
			board: "b2",
			name: "Data store",
			tags: [{ id: "t1", name: "react" }, { id: "t2", name: "js" }],
			previewText:
				"some content yada yade yado yadi yado some content yada yade yado yadi yado some content yada yade yado yadi yado some content yada yade yado yadi yado",
			// image: "https://dummyimage.com/25x25/111/bbb",
			image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
			estimate: 0.5
		},
		{
			id: "t3",
			board: "b3",
			name: "Detail view",
			tags: [{ id: "t1", name: "react" }, { id: "t2", name: "js" }],
			previewText:
				"some content yada yade yado yadi yado some content yada yade yado yadi yado some content yada yade yado yadi yado some content yada yade yado yadi yado",
			// image: "https://dummyimage.com/25x25/111/bbb",
			image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
			estimate: 0.5
		},
		{
			id: "t4",
			board: "b4",
			name: "Add and edit - fullstack",
			tags: [{ id: "t1", name: "react" }, { id: "t2", name: "js" }],
			previewText:
				"some content yada yade yado yadi yado some content yada yade yado yadi yado some content yada yade yado yadi yado some content yada yade yado yadi yado",
			// image: "https://dummyimage.com/25x25/111/bbb",
			image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
			estimate: 0.5
		},
	]
};

/*
	b1: ["t1", "t2", "t3"],
	b2: ["tt1", "tt2", "tt3"],
	b3: ["c1", "c2", "c3"],
	b4: ["a1", "a2", "a3"]
*/

// export default data;
module.exports = data;
