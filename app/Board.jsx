import React, { Component } from "react";

import Task from "./Task";

const style = {
	grid: {
		display: "grid",
		gridTemplateColumns: "auto auto auto",
		gridGap: "10px"
	}
};

class Board extends Component {
	render() {
		return (
			<div style={style.grid}>
				<Task id={1} />
				<Task id={2} />
				<Task id={3} />
				<Task id={4} />
				<Task id={5} />
				<Task id={6} />
			</div>
		);
	}
}

export default Board;
