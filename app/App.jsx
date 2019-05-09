import React from "react";
import axios from "axios";

import Board from "./Board";
import Panel from "./Panel";

const styles = {
	grid: {
		display: "grid",
		gridTemplateColumns: "auto auto",
		gridGap: "10px"
	}
};

class App extends React.Component {
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

	// replace destBoardId of target item
	itemTransfer = (itemId, sourceBoardId, destBoardId) => {
		// send update request to backend
		// patch is enough for just the boardId update
		axios.patch(`/api/tasks/${itemId}`, { board: destBoardId }).then(res => {
			const updatedTask = res.data;
			const newTasksWithoutUpdated = this.state.tasks.filter(t => t.id !== itemId);
			this.setState({
				tasks: [...newTasksWithoutUpdated, updatedTask]
			});
		});
	};

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
