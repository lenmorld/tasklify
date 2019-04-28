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
	state = {
		itemDraggedId: null
		// TODO: set the task in state
	};

	onItemLeaveBoard = itemDraggedId => {
		this.setState({
			itemDraggedId: itemDraggedId
		});
	};

	render() {
		// itemDroppedId from withDropTarget
		const { name, tasks, itemDroppedId } = this.props;

		let filtered = tasks;
		// remove item leaving from tasks, if any
		// debugger;
		if (this.state.itemDraggedId) {
			filtered = filtered.filter(t => t !== this.state.itemDraggedId);
		}

		// add itemDroppedId to items
		if (itemDroppedId) {
			tasks.push(itemDroppedId);
		}

		console.log(name, ": ", tasks);

		return (
			<div style={{ border: "5px solid blue", width: "100%", height: "300px" }}>
				<h2>{name}</h2>
				<div style={style.grid}>
					{tasks.map(task => (
						<Task key={task} id={task} onItemLeaveContainer={this.onItemLeaveBoard} />
					))}
				</div>
			</div>
		);
	}
}

// export default Board;
export default withDropTarget(Board);
