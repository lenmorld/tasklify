import React from "react";

import Board from "./Board";
import Panel from "./Panel";

import data from "./data";
console.log(data);
const tasks = data.tasks;

const styles = {
	grid: {
		display: "grid",
		gridTemplateColumns: "auto auto",
		gridGap: "10px"
	}
};

// TODO: put all data stuff in a store object

const getTasksFromBoard = boardId => {
	return tasks.filter(t => t.board === boardId);
};

const getTasksFromBoards = boards => {
	const tasks = {};
	boards.forEach(b => {
		tasks[b.id] = getTasksFromBoard(b.id);
	});
	return tasks;
};

class App extends React.Component {
	state = {
		boards: data.boards,
		tasks: getTasksFromBoards(data.boards)
	};

	// state = data.boards;
	// state = {
	// 	tasks: {
	// 		b1: ["t1", "t2", "t3"],
	// 		b2: ["tt1", "tt2", "tt3"],
	// 		b3: ["c1", "c2", "c3"],
	// 		b4: ["a1", "a2", "a3"]
	// 	}
	// };

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

	/*
		e.g. Board b1
		{
			id: "b1",
			name: "Regulate"
		}

		with tasks
		[
			{ id: 1, board: "b1", name: "Do the design"...}
		]
	*/

	render() {
		return (
			<div style={styles.mainContainer}>
				<Panel />
				<div style={styles.grid}>
					{this.state.boards.map(b => (
						<Board board={b} tasks={getTasksFromBoard(b.id)} />
					))}
				</div>
			</div>
		);
	}
}

export default App;
