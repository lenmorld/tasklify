import React from "react";

import Board from "./Board";

// import data from "./data";
// console.log(data);

class App extends React.Component {
	state = {
		tasks: {
			b1: ["t1", "t2", "t3"],
			b2: ["tt1", "tt2", "tt3"]
		}
	};

	itemLeave = (itemId, boardId) => {
		debugger;
		let tasks = this.state.tasks[boardId].filter(t => t !== itemId);

		let newState = {
			...this.state.tasks,
			[boardId]: tasks
		};

		this.setState({
			tasks: newState
		});
	};

	itemReceive = (itemId, boardId) => {
		// concat is immutable
		const tasks = this.state.tasks[boardId].concat(itemId);
		let newState = {
			...this.state.tasks,
			[boardId]: tasks
		};
		debugger;
		this.setState({
			tasks: newState
		});
	};

	render() {
		return (
			<div>
				<Board
					name="Regulate"
					tasks={this.state.tasks.b1}
					boardId="b1"
					itemLeave={this.itemLeave}
					itemReceive={this.itemReceive}
				/>
				<Board
					name="Effectuate"
					tasks={this.state.tasks.b2}
					boardId="b2"
					itemLeave={this.itemLeave}
					itemReceive={this.itemReceive}
				/>
			</div>
		);
	}
}

export default App;
