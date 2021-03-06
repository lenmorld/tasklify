import React, { Component } from "react";

import { withDragSource } from "./DragAndDrop";

import styles from "./styles";

const preview = text => {
	return text.substring(0, 60) + "...";
};

const data = {
	id: 1,
	name: "Do the design",
	tags: [{ id: "t1", name: "react" }, { id: "t2", name: "js" }],
	board: "web",
	previewText:
		"some content yada yade yado yadi yado some content yada yade yado yadi yado some content yada yade yado yadi yado some content yada yade yado yadi yado",
	// image: "https://dummyimage.com/25x25/111/bbb",
	image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
	estimate: 0.5
};

class Task extends Component {
	render() {
		const { task, setEntity } = this.props;

		return (
			<div style={styles.card}>
				<div
					style={styles.nameContainer}
					onClick={() => setEntity({ id: task.id, type: "task", mode: "edit" })}
				>
					<div style={styles.name}>{task.name}</div>
				</div>
				<div style={styles.content}>{preview(task.previewText)}</div>
				<div style={styles.avatarContainer}>
					<img style={styles.avatarImage} src={task.image} alt="avatar" />
				</div>
				<div style={styles.tagsContainer}>
					{task.tags.map(t => (
						<div key={t.id} style={styles.tag}>
							{t.name}
						</div>
					))}
				</div>
				<div style={styles.estimateContainer}>
					<div style={styles.estimate}>{data.estimate}</div>
				</div>
			</div>
		);
	}
}

export default withDragSource(Task);
