import React, { Component } from 'react';

import Task from './Task';

const style = {
	grid: {
		display: 'grid',
		gridTemplateColumns: 'auto auto auto',
		gridGap: '10px',
	}
}


class Board extends Component {
	render() {
		return (
			<div style={style.grid}>
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
				<Task />
			</div>
		);
	}
}

export default Board;