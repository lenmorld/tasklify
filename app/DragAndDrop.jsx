import React from "react";

/**
 * props needed that must be passed by parent component
 * - id
 * 	- functions both as a prop for the HoC and as a uniquer HTML element id
 * 	- e.g. <Task id={1}>
 *
 */

export const withDragSource = Component => {
	class DragSource extends React.Component {
		onDragStart = event => {
			// debugger;
			// get id of dragged element
			console.log(`Dragging: ${event.target.id}`);
			event.dataTransfer.setData("text", event.target.id);
		};

		render() {
			const { id } = this.props;
			return (
				<div draggable="true" id={id} onDragStart={this.onDragStart}>
					<Component {...this.props} />
				</div>
			);
		}
	}

	return DragSource;
};

export const withDropTarget = Component => {
	class DropTarget extends React.Component {
		onDragOver = event => {
			event.preventDefault(); // default does not allow drop
		};

		onDrop = event => {
			debugger;
			event.preventDefault(); // default is open as link
			const data = event.dataTransfer.getData("text");
			console.log(`Dropping: ${data}`);
			// default HTML DnD is moving the element
			// move to drop area
			event.target.appendChild(document.querySelector(`#${data}`));
		};

		render() {
			return (
				<div onDragOver={this.onDragOver} onDrop={this.onDrop}>
					<Component {...this.props} />
				</div>
			);
		}
	}

	return DropTarget;
};
