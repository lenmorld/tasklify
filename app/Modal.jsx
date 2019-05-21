/**
 * usage:
 *
 * <Modal>
 *     <div>...stuff</div>
 * </Modal>
 *
 *
 * using ModalContext:
 *
 * // define this.state.modal in Context root component
 *
 * <ModalContext.Provider value={this.state.modal}>
 *     ...
 * </ModalContext.Provider>
 *
 * <ModalContext.Consumer>
 * 	{({ visible, toggleModal }) => {
 *          visible ? <Modal>haha</Modal> : ""
 *          ...
 *          onClick = () => toggleModal
 *     } }
 * </ModalContext.Consumer>
 *
 */

import React from "react";
import ReactDOM from "react-dom";

const styles = {
	outside: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
		backgroundColor: "rgba(0,0,0, 0.5)",
		// flex - center vertically and horizontally
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inside: {
		width: "50%",
		height: "75%",
		backgroundColor: "white"
	}
};

// TODO: put #root in config or pass as props
const appRoot = document.querySelector("#root");

// A reusable Modal component based on React Portal
class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.modalElement = document.createElement("div");
	}

	componentDidMount() {
		appRoot.appendChild(this.modalElement);
	}

	componentWillUnmount() {
		appRoot.removeChild(this.modalElement);
	}

	renderPortalBody = content => (
		<div style={styles.outside}>
			<div style={styles.inside}>{content}</div>
		</div>
	);

	// TODO: provide render props option as well

	render() {
		return ReactDOM.createPortal(
			this.renderPortalBody(this.props.children),
			this.modalElement
		);
	}
}

export default Modal;
