import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';

class PlayLogin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: null,
			value: '',
			email: '',
			password: ''
		};

		// Sad. https://www.crestify.com/public/V604
		this.onClickHandler = this.onClickHandler.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePassChange = this.handlePassChange.bind(this);
	}

	onClickHandler(e) {
		let data = JSON.stringify({
			email: this.state.email,
			password: this.state.password
		});
		let headers = new Headers({
			'Content-Type': 'application/json'
		});
		fetch('/playlogin', {method: 'POST', body: data, headers: headers}).then((res) => {
			if (res.ok) {
				this.setState({login: true});
				this.props.updateLoginState("play");
			}
			// Login failed :(
		});
	}

	handleEmailChange(e) {
		this.setState({email: e.target.value});
	}

	handlePassChange(e) {
		this.setState({password: e.target.value});
	}

	render() {
		return (
			<div>
				<form>
					<FormGroup
						controlId="formBasicText"
					>
					<ControlLabel>Email</ControlLabel>
					<FormControl
			            type="text"
			            value={this.state.email}
			            placeholder="Google Play Music Email"
			            onChange={this.handleEmailChange}
			          />
					<ControlLabel>Password</ControlLabel>
					<FormControl
			            type="text"
			            value={this.state.password}
			            placeholder="Google Play Music Password"
			            onChange={this.handlePassChange}
			          />
					<HelpBlock>Don't worry, your password will not be stored.</HelpBlock>
					<Button onClick={this.onClickHandler}>Login</Button>
					</FormGroup>
				</form>
			</div>
		)
	}
}

export default PlayLogin;
