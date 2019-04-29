import React, { Component } from "react";

import Task from "./Task";
import { withDropTarget } from "./DragAndDrop";

const style = {
	grid: {
		display: "grid",
		gridTemplateColumns: "auto auto auto",
		gridGap: "10px"
	}
};

class Board extends Component {
	render() {
		// itemDroppedId from withDropTarget
		const { name, tasks, boardId } = this.props;

		// // add itemDroppedId to items
		// if (itemDroppedId) {
		// 	itemReceive(itemDroppedId, boardId);
		// }

		console.log(name, ": ", tasks);

		return (
			<div style={{ border: "5px solid blue", width: "100%", height: "300px" }}>
				<h2>{name}</h2>
				<div style={style.grid}>
					{tasks.map(task => (
						<Task key={task} id={task} boardId={boardId} />
					))}
				</div>
			</div>
		);
	}
}

// export default Board;
export default withDropTarget(Board);
