import React from "react";

import Board from './Board';
import DragAndDrop from './DragAndDrop';

// import data from "./data";
// console.log(data);

class App extends React.Component {
	render() {
		// return (<div><Board /></div>);
		return (
			<DragAndDrop>
				<div>Hey</div>
			</DragAndDrop>
		)
	}
}

export default App;
