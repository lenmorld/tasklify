import React from "react";
import axios from "axios";

import Board from "./Board";
import Panel from "./Panel";
import Modal from "./Modal";
import ModalContext from "./ModalContext";

const styles = {
	grid: {
		display: "grid",
		gridTemplateColumns: "auto auto",
		gridGap: "10px"
	}
};

class App extends React.Component {
	toggleModal = () => {
		this.setState({
			modal: {
				...this.state.modal,
				visible: !this.state.modal.visible
			}
		});
	};

	// TODO: figure out what is causing extra re-render even in a simple toggle of visible in Context

	setEntityInModal = _entity => {
		// debugger;
		this.setState({
			modal: {
				visible: true,
				entity: _entity
			}
		});
	};

	state = {
		boards: [],
		tasks: [],
		modal: {
			visible: false,
			toggleModal: this.toggleModal,
			entity: {
				type: "task", // default
				id: "t1",
				mode: "edit"
			},
			setEntity: this.setEntityInModal
		}
	};

	componentDidMount() {
		// fetch boards then fetch tasks
		axios.get("/api/boards").then(res => {
			const boards = res.data;

			axios.get("/api/tasks").then(_res => {
				this.setState({
					boards: boards,
					tasks: _res.data
				});
			});
		});
	}

	// TODO: put in store
	getItemByTypeAndId = (type, id) => {
		if (type === "task") {
			return this.state.tasks.find(t => t.id === id);
		}
	};

	// replace destBoardId of target item
	itemTransfer = (itemId, sourceBoardId, destBoardId) => {
		// send update request to backend
		// patch is enough for just the boardId update
		axios.patch(`/api/tasks/${itemId}`, { board: destBoardId }).then(res => {
			const updatedTask = res.data;
			const newTasksWithoutUpdated = this.state.tasks.filter(t => t.id !== itemId);
			this.setState({
				tasks: [...newTasksWithoutUpdated, updatedTask]
			});
		});
	};

	renderModal = () => {
		// debugger;
		const entity = this.state.modal.entity;

		const item = this.getItemByTypeAndId(entity.type, entity.id);

		return (
			<Modal>
				{item.id} - {item.name}
			</Modal>
		);
	};

	render() {
		return (
			<div style={styles.mainContainer}>
				<ModalContext.Provider value={this.state.modal}>
					<Panel />
					<div style={styles.grid}>
						{this.state.boards.map(b => (
							<Board
								board={b}
								tasks={this.state.tasks}
								itemTransfer={this.itemTransfer}
								containerId={b.id} // needed for withDropTarget
							/>
						))}
					</div>
					{/* Modal */}
					{/* {this.state.modal.visible ? this.renderModal() : ""} */}
				</ModalContext.Provider>
			</div>
		);
	}
}

export default App;
