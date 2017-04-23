import React from 'react';
import { Button } from 'react-bootstrap';
import PlayLogin from "./PlayLogin.jsx"

class PlayFetch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};


		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler() {
		this.setState({counter: this.state.counter + 1});
	}

	render() {
		return (
			<div>
				<h1>Hello!</h1>
				<h3>Clicked {this.state.counter} times</h3>
				<Button onClick={this.onClickHandler}>Click me!</Button>
				<PlayLogin updateLoginState={this.props.loginUpdater}/>
			</div>
		)
	}
}

export default PlayFetch;
