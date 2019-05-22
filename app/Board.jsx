import React, { Component } from "react";

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

class Board extends Component {
	render() {
		// const { name, tasks, containerId } = this.props;
		const { board, tasks, setEntity } = this.props;

		const tasksInBoard = getTasksInBoard(board.id, tasks);

		console.log(board.name, ": ", tasksInBoard);

		// <Task key={task.id} id={task.id} containerId={board.id} />

		return (
			<div style={styles.container}>
				<h2>{board.name}</h2>
				<div style={styles.grid}>
					{tasksInBoard.map(task => (
						<Task
							key={task.id}
							task={task}
							id={task.id}
							containerId={board.id}
							setEntity={setEntity}
						/>
					))}
				</div>
			</div>
		);
	}
}

// export default Board;
export default withDropTarget(Board);
