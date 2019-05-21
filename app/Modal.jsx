/**
 * usage:
 *
 * <Modal>
 *     <div>...stuff</div>
 * </Modal>
 */

import React from "react";
import ReactDOM from "react-dom";

const styles = {};

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

	// TODO: provide render props option as well

	render() {
		return ReactDOM.createPortal(this.props.children, this.modalElement);
	}
}

export default Modal;
