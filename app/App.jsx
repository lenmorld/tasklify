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

	state = {
		boards: [],
		tasks: [],
		modal: {
			visible: false,
			toggleModal: this.toggleModal
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
					{/* {this.state.modal.visible ? <Modal>haha</Modal> : ""} */}
				</ModalContext.Provider>
			</div>
		);
	}
}

export default App;
