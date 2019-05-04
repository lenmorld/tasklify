import React, { Component } from "react";

import Task from "./Task";
import { withDropTarget } from "./DragAndDrop";

const style = {
	grid: {
		display: "grid",
		gridTemplateColumns: "auto auto",
		gridGap: "10px"
	}
};

class Board extends Component {
	render() {
		const { name, tasks, containerId } = this.props;

		console.log(name, ": ", tasks);

		return (
			<div style={{ border: "1px solid gray" }}>
				<h2>{name}</h2>
				<div style={style.grid}>
					{tasks.map(task => (
						<Task key={task} id={task} containerId={containerId} />
					))}
				</div>
			</div>
		);
	}
}

// export default Board;
export default withDropTarget(Board);
