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
				<PlayLogin updateLoginState={this.props.loginUpdater}/>
			</div>
		)
	}
}

export default PlayFetch;
