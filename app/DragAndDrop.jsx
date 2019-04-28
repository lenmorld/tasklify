import React from "react";

/**
 * props needed that must be passed by parent component
 * - id
 * 	- functions both as a prop for the HoC and as a uniquer HTML element id
 * 	- e.g. <Task id={1}>
 *
 * - onItemLeaveBoard
 * 	- what to do after item leaves a parent component
 *
 */

export const withDragSource = Component => {
	class DragSource extends React.Component {
		// state = {
		// 	itemDraggedId: null
		// };

		onDragStart = event => {
			// get id of dragged element
			console.log(`Dragging: ${event.target.id}`);
			event.dataTransfer.setData("text", event.target.id);

			// from Board
			this.props.onItemLeaveContainer(event.target.id);

			// debugger;
			// // track to remove from source's parent
			// this.setState({
			// 	itemDraggedId: event.target.id
			// });
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

/**
 *
 * items ids
 */
export const withDropTarget = Component => {
	class DropTarget extends React.Component {
		state = {
			itemDroppedId: null
		};

		onDragOver = event => {
			event.preventDefault(); // default does not allow drop
		};

		onDrop = event => {
			// debugger;
			event.preventDefault(); // default is open as link
			const itemId = event.dataTransfer.getData("text");
			console.log(`Dropping: ${itemId}`);
			// default HTML DnD is moving the element
			// move to drop area
			// event.target.appendChild(document.querySelector(`#${data}`));

			this.setState({
				itemDroppedId: itemId
			});

			// TODO: how to modify state of the user component while here
			// or alternatively just put all drag and drop logic in there
			// if hard to make it reusable
		};

		render() {
			return (
				<div onDragOver={this.onDragOver} onDrop={this.onDrop}>
					<Component {...this.props} itemDroppedId={this.state.itemDroppedId} />
				</div>
			);
		}
	}

	return DropTarget;
};
