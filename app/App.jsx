import React from "react";

import Board from "./Board";

// import data from "./data";
// console.log(data);

class App extends React.Component {
	render() {
		return (
			<div>
				<Board name="Regulate" tasks={["t1", "t2", "t3"]} />
				<Board name="Effectuate" tasks={["tt1", "tt2", "tt3"]} />
			</div>
		);
	}
}

export default App;
