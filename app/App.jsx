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

	itemTransfer = (itemId, sourceBoardId, destBoardId) => {
		// concat is immutable
		const destBoard = this.state.tasks[destBoardId].concat(itemId);
		const sourceBoard = this.state.tasks[sourceBoardId].filter(t => t !== itemId);
		let newState = {
			...this.state.tasks,
			[destBoardId]: destBoard,
			[sourceBoardId]: sourceBoard
		};

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
					itemTransfer={this.itemTransfer}
				/>
				<Board
					name="Effectuate"
					tasks={this.state.tasks.b2}
					boardId="b2"
					itemTransfer={this.itemTransfer}
				/>
			</div>
		);
	}
}

export default App;
