import React from 'react';

class Hello extends React.Component {
	render() {
		return <h1>Hello</h1>
	}
}

export default Hello;

import ReactDOM from 'react-dom';
ReactDOM.render(<Hello/>, document.getElementById("react-root"));
