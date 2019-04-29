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
		onDragStart = (event, sourceBoardId) => {
			// get id of dragged element
			const itemDrag = {
				item: event.target.id,
				container: sourceBoardId
			};
			console.log(`Dragging: ${JSON.stringify(itemDrag)}`);
			event.dataTransfer.setData("text", JSON.stringify(itemDrag));
		};

		render() {
			const { id, boardId } = this.props;
			return (
				<div
					draggable="true"
					id={id}
					onDragStart={event => this.onDragStart(event, boardId)}
				>
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

		onDrop = event => {
			event.preventDefault(); // default is open as link
			const itemDropped = JSON.parse(event.dataTransfer.getData("text"));
			console.log(
				`Dropping: ${itemDropped.item} from ${itemDropped.container} to ${
					this.props.boardId
				}`
			);
			// default HTML DnD is moving the element
			// move to drop area
			// event.target.appendChild(document.querySelector(`#${data}`));

			this.props.itemTransfer(
				itemDropped.item,
				itemDropped.container,
				this.props.boardId
			);
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
