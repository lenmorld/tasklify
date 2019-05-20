import React, { Component } from "react";
import { Router, Link } from "@reach/router";

import Task from "./Task";
import { withDropTarget } from "./DragAndDrop";

const getTasksInBoard = (boardId, tasks) => {
	return tasks.filter(t => t.board === boardId);
};

const styles = {
	grid: {
		display: "grid",
		gridTemplateColumns: "auto auto",
		gridGap: "10px"
	},
	container: {
		padding: "10px",
		border: "1px solid gray",
		backgroundColor: ""
	}
};

const Home = () => <h2>Home</h2>;
const Team = () => <h2>Team</h2>;

class Board extends Component {
	render() {
		// const { name, tasks, containerId } = this.props;
		const { board, tasks } = this.props;

		const tasksInBoard = getTasksInBoard(board.id, tasks);

		console.log(board.name, ": ", tasksInBoard);

		// <Task key={task.id} id={task.id} containerId={board.id} />

		return (
			<div style={styles.container}>
				<Link to="/">Home</Link>
				<Link to="/team">Team</Link>
				<Router>
					<Home path="/" />
					<Team path="/team/*" />
				</Router>
				<h2>{board.name}</h2>
				<div style={styles.grid}>
					{tasksInBoard.map(task => (
						<Task key={task.id} task={task} id={task.id} containerId={board.id} />
					))}
				</div>
			</div>
		);
	}
}

// export default Board;
export default withDropTarget(Board);
