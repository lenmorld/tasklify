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
			// get id of dragged element
			console.log(`Dragging: ${event.target.id}`);
			event.dataTransfer.setData("text", event.target.id);

			// from Board
			this.props.onItemLeave(event.target.id);
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
		onDragOver = event => {
			event.preventDefault(); // default does not allow drop
		};

		onDrop = (event, boardId) => {
			event.preventDefault(); // default is open as link
			const itemId = event.dataTransfer.getData("text");
			console.log(`Dropping: ${itemId}`);
			// default HTML DnD is moving the element
			// move to drop area
			// event.target.appendChild(document.querySelector(`#${data}`));

			// THIS ONLY WORKS IF
			//  this.props.onItemLeave(event.target.id);
			// is commented out in withDragSource
			// this.props.itemReceive(itemId, this.props.boardId);
			this.props.itemReceive(itemId, boardId);

			// TODO: how to modify state of the user component while here
			// or alternatively just put all drag and drop logic in there
			// if hard to make it reusable
		};

		render() {
			return (
				<div
					onDragOver={this.onDragOver}
					onDrop={event => this.onDrop(event, this.props.boardId)}
				>
					<Component {...this.props} />
				</div>
			);
		}
	}

	return DropTarget;
};
