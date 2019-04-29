import React from "react";

import Board from "./Board";

// import data from "./data";
// console.log(data);

const styles = {
	grid: {
		display: "grid",
		gridTemplateColumns: "auto auto",
		gridGap: "10px"
	}
};

class App extends React.Component {
	state = {
		tasks: {
			b1: ["t1", "t2", "t3"],
			b2: ["tt1", "tt2", "tt3"],
			b3: ["c1", "c2", "c3"],
			b4: ["a1", "a2", "a3"]
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
			<div style={styles.grid}>
				<Board
					name="Regulate"
					tasks={this.state.tasks.b1}
					containerId="b1"
					itemTransfer={this.itemTransfer}
				/>
				<Board
					name="Debate"
					tasks={this.state.tasks.b2}
					containerId="b2"
					itemTransfer={this.itemTransfer}
				/>
				<Board
					name="Automate"
					tasks={this.state.tasks.b3}
					containerId="b3"
					itemTransfer={this.itemTransfer}
				/>
				<Board
					name="Effectuate"
					tasks={this.state.tasks.b4}
					containerId="b4"
					itemTransfer={this.itemTransfer}
				/>
			</div>
		);
	}
}

export default App;
