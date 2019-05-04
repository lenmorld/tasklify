import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

class UI extends React.Component {
	render() {
		return <App />;
	}
}

ReactDOM.render(<UI />, document.getElementById("app"));
