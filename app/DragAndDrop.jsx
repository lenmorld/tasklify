import React from "react";

class DragAndDrop extends React.Component {

	onDragStart = (event) => {
		// get id of dragged element

		console.log(`Dragging: ${event.target.id}`);
		event.dataTransfer.setData("text", event.target.id);
	}

	onDragOver = event => {
		event.preventDefault();	// default does not allow drop
	}	

	onDrop = event => {
		event.preventDefault(); // default is open as link
		const data = event.dataTransfer.getData("text");

		console.log(`Dropping: ${data}`);
	}

	render() {
		return (
			<div>
			 {/* DROP HERE */}
			<div onDragOver={this.onDragOver}
					onDrop={this.onDrop}
					style={{border: '1px solid blue', width: '300px', height: '300px'}}
				>
			</div>

			{/* DRAG THIS */}
			<div draggable="true"
								id="1"
								key={1}
								onDragStart={this.onDragStart}>
							{this.props.children}
						</div>
			</div>

		)
	}
}

export default DragAndDrop;
