import React from "react";
import ReactDOM from "react-dom";

import App from './App';

class UI extends React.Component {
	render() {
		return (<div>
			<App />
		</div>)
	}
}

ReactDOM.render(<UI />, document.getElementById("app"));
