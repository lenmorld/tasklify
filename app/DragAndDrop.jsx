import React from "react";

/**
 * props needed that must be passed by parent component
 * - id : <Task id={1}>
 */

export const withDragSource = Component => {
	class DragSource extends React.Component {
		onDragStart = event => {
			// get id of dragged element
			console.log(`Dragging: ${event.target.id}`);
			event.dataTransfer.setData("text", event.target.id);
		};

		render() {
			const { id } = this.props;

			return (
				<div draggable="true" id={id} onDragStart={this.onDragStart}>
					<Component />
				</div>
			);
		}
	}

	return DragSource;
};

export const withDragAndDrop = Component => {
	class DropTarget extends React.Component {
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
				<div
					onDragOver={this.onDragOver}
					onDrop={this.onDrop}
					style={{ border: "1px solid blue", width: "300px", height: "300px" }}
				>
					<Component />
				</div>
			);
		}
	}

	return DropTarget;
};
