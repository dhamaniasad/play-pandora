import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button, Alert } from 'react-bootstrap';

class PlayLogin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: null,
			value: '',
			email: '',
			password: '',
			loginFailed: false
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
				this.setState({loginFailed: false});
				this.props.updateLoginState("play", true);
			} else {
				this.setState({loginFailed: true});
				this.props.updateLoginState("play", false);
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

		const loginFailed = this.state.loginFailed;

		return (
			<div>
				<form>
				{loginFailed ? (
						<Alert bsStyle="danger">
							<h4>Oops! Looks like login to Google Play has failed :(</h4>
							<p>Please double-check your email and password combination, or try again later.</p>
						</Alert>
					) : (null)}
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
