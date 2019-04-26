import React from "react";

class DragAndDrop extends React.Component {
	onDragStart = event => {
		// get id of dragged element

		console.log(`Dragging: ${event.target.id}`);
		event.dataTransfer.setData("text", event.target.id);
	};

	onDragOver = event => {
		event.preventDefault(); // default does not allow drop
	};

	onDrop = event => {
		event.preventDefault(); // default is open as link
		const data = event.dataTransfer.getData("text");
		console.log(`Dropping: ${data}`);
		// default HTML DnD is moving the element
		// move to drop area
		event.target.appendChild(document.querySelector(`#${data}`));
	};

	render() {
		// TODO: implement passed props, or make it an HOC

		return (
			<div>
				{/* DROP HERE */}
				<div
					onDragOver={this.onDragOver}
					onDrop={this.onDrop}
					style={{ border: "1px solid blue", width: "300px", height: "300px" }}
				/>

				{/* DRAG THESE */}
				{["k1", "k2", "k3", "k4"].map(item => (
					<div draggable="true" id={item} key={item} onDragStart={this.onDragStart}>
						{item}
					</div>
				))}
			</div>
		);
	}
}

export default DragAndDrop;
