import React from "react";
import { Link } from "@reach/router";

import styles from "./styles";
const { panel } = styles;

class Panel extends React.Component {
	render() {
		return (
			<div style={panel.main}>
				<Link to="/">
					<div>Tasklify</div>
				</Link>
				<div style={panel.options}>
					<div style={panel.option}>
						<i class="fas fa-list-alt" />
					</div>
					<div style={panel.option}>
						<i class="fas fa-file-alt" />
					</div>
				</div>
				<div style={panel.user}>
					<i class="fas fa-user" />
				</div>
			</div>
		);
	}
}

export default Panel;
