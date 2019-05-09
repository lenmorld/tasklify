import React from "react";
import axios from "axios";

import Board from "./Board";
import Panel from "./Panel";

// import data from "./data";
// console.log(data);

const styles = {
	grid: {
		display: "grid",
		gridTemplateColumns: "auto auto",
		gridGap: "10px"
	}
};

// TODO: put all data stuff in a store object

// const getTaskFromBoard = (boardId, tasks) => {
// 	return tasks.filter(t => t.board === boardId);
// };

// const getTasksFromBoards = (boards, tasks) => {
// 	const _tasks = {};
// 	boards.forEach(b => {
// 		_tasks[b.id] = getTaskFromBoard(b.id, tasks);
// 	});
// 	return _tasks;
// };

// const getTaskById = (id, tasks) => {
// 	return tasks.filter(t => t.id === id);
// };

class App extends React.Component {
	// state = {
	// boards: data.boards,
	// tasks: data.tasks // TODO revise this to match data strucutre needed
	// };

	// state from backend
	state = {
		boards: [],
		tasks: []
	};

	componentDidMount() {
		// fetch boards then fetch tasks
		axios.get("/api/boards").then(res => {
			const boards = res.data;

			axios.get("/api/tasks").then(_res => {
				this.setState({
					boards: boards,
					tasks: _res.data
				});
			});
		});
	}

	// state = data.boards;
	// state = {
	// 	tasks: {
	// 		b1: ["t1", "t2", "t3"],
	// 		b2: ["tt1", "tt2", "tt3"],
	// 		b3: ["c1", "c2", "c3"],
	// 		b4: ["a1", "a2", "a3"]
	// 	}
	// };

	// replace destBoardId of target item
	itemTransfer = (itemId, sourceBoardId, destBoardId) => {
		const newTasks = this.state.tasks.map(t =>
			t.id === itemId ? { ...t, board: destBoardId } : t
		);

		this.setState({
			tasks: newTasks
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

	// 							{/*tasks={getTasksFromBoard(b.id, this.state.tasks)} */}

	render() {
		return (
			<div style={styles.mainContainer}>
				<Panel />
				<div style={styles.grid}>
					{this.state.boards.map(b => (
						<Board
							board={b}
							tasks={this.state.tasks}
							itemTransfer={this.itemTransfer}
							containerId={b.id} // needed for withDropTarget
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
