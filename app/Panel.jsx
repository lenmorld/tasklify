import React from "react";

import styles from "./styles";
const { panel } = styles;

class Panel extends React.Component {
	render() {
		return (
			<div style={panel.main}>
				<div>Tasklify</div>
				<div styles={panel.options}>asdas</div>
			</div>
		);
	}
}

export default Panel;
