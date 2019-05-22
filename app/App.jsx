import React from "react";
import axios from "axios";

import Board from "./Board";
import Panel from "./Panel";
import Modal from "./Modal";
// import ModalContext from "./ModalContext";

const styles = {
	grid: {
		display: "grid",
		gridTemplateColumns: "auto auto",
		gridGap: "10px"
	}
};

class App extends React.Component {
	// toggleModal = () => {
	// 	this.setState({
	// 		modal: {
	// 			...this.state.modal,
	// 			visible: !this.state.modal.visible
	// 		}
	// 	});
	// };

	setEntityInModal = _entity => {
		// debugger;
		this.setState({
			modalEntity: _entity,
			modalVisible: true
		});
	};

	state = {
		boards: [],
		tasks: [],
		modalVisible: false,
		modalEntity: {
			type: "task", // default
			id: "t1",
			mode: "edit"
		}
	};

	/*
		modal: {
			visible: false,
			// toggleModal: this.toggleModal,
			entity: {
				type: "task", // default
				id: "t1",
				mode: "edit"
			},
			setEntity: this.setEntityInModal
		}
	*/

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

	componentWillUpdate(newProps, newState) {
		console.log("New props: ", newProps);
		console.log("New state: ", newState);
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

	hideModal = () => {
		this.setState({
			modalVisible: false
		});
	};

	renderModal = () => {
		// debugger;
		// const entity = this.state.modal.entity;
		const entity = this.state.modalEntity;

		const item = this.getItemByTypeAndId(entity.type, entity.id);

		return (
			<Modal onExit={this.hideModal}>
				{item.id} - {item.name}
			</Modal>
		);
	};

	render() {
		return (
			<div style={styles.mainContainer}>
				{/* <ModalContext.Provider value={this.state.modal}> */}
				<Panel />
				<div style={styles.grid}>
					{this.state.boards.map(b => (
						<Board
							board={b}
							tasks={this.state.tasks}
							itemTransfer={this.itemTransfer}
							containerId={b.id} // needed for withDropTarget
							setEntity={this.setEntityInModal}
						/>
					))}
				</div>
				{/* Modal */}
				{this.state.modalVisible ? this.renderModal() : ""}
				{/* </ModalContext.Provider> */}
			</div>
		);
	}
}

export default App;
