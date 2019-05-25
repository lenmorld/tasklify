/**
 * usage:
 *
 * <Modal onExit={}>
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
		backgroundColor: "white",
		position: "relative"
	},
	closeButton: {
		top: "5px",
		right: "5px",
		position: "absolute"
	}
};

// TODO: put #root in config or pass as props
// const appRoot = document.querySelector("#root");

// A reusable Modal component based on React Portal
class Modal extends React.Component {
	// get from props
	// static getDerivedStateFromProps(props, state) {
	// 	return props.visible === state.visible ? null : { visible: props.visible };
	// }

	constructor(props) {
		super(props);

		// this.state = {
		// 	visible: false
		// };

		// this.modalElement = document.createElement("div");
		this.modalElement = document.querySelector("#modal");
	}

	// hideModal = () => {
	// 	this.setState({
	// 		visible: false
	// 	});
	// };

	// showModal = () => {
	// 	this.setState({
	// 		visible: true
	// 	});
	// };

	// componentDidMount() {
	// appRoot.appendChild(this.modalElement);
	// }

	// componentWillUnmount() {
	// 	appRoot.removeChild(this.modalElement);
	// }

	renderPortalBody = content => (
		<div style={styles.outside}>
			<div style={styles.inside}>
				<div style={styles.closeButton}>
					<button onClick={this.props.hide}>❌</button>
				</div>
				<div>{this.props.render()}</div>
				{/* <div>{content}</div> */}
			</div>
		</div>
	);

	// TODO: provide render props option as well

	componentDidUpdate(prevState, prevProps) {
		// debugger;
	}

	render() {
		if (!this.props.visible) {
			return "";
		}

		return ReactDOM.createPortal(
			this.renderPortalBody(this.props.children),
			this.modalElement
		);
	}
}

/*
		return ReactDOM.createPortal(
			this.renderPortalBody(this.props.children),
			this.modalElement
		);
*/

export default Modal;
