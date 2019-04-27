import React, { Component } from "react";

import { withDragSource } from "./DragAndDrop";

const baseStyles = {
	flexColumn: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-between"
	}
};

const styles = {
	card: {
		border: "1px solid gray",
		borderRadius: "5px",
		padding: "5px",
		// maxWidth: '300px',
		...baseStyles.flexColumn,
		height: "150px",
		width: "300px"
	},
	name: {
		fontSize: "1.5rem"
	},
	tag: {
		backgroundColor: "#001122",
		color: "white",
		// border: '1px solid blue',
		display: "inline-block",
		padding: "5px",
		borderRadius: "5px",
		margin: "0 5px"
	},
	image: {}
};

const data = {
	id: 1,
	name: "Do the design",
	tags: [{ id: "t1", name: "react" }, { id: "t2", name: "js" }],
	board: "web",
	image: "https://dummyimage.com/50x50/111/bbb"
};

class Task extends Component {
	render() {
		const task = data;

		return (
			<div style={styles.card}>
				<div style={styles.name}>{task.name}</div>
				<div style={styles.image}>
					<img src={task.image} alt="avatar" />
				</div>
				<div>
					{task.tags.map(t => (
						<div key={t.id} style={styles.tag}>
							{t.name}
						</div>
					))}
				</div>
			</div>
		);
	}
}

// export default Task;
export default withDragSource(Task);
