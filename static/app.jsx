import React from "react";
import PlayFetch from "./components/PlayFetch.jsx";
import Navigation from "./components/nav.jsx";
import About from "./components/about.jsx";

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			playLoggedIn: false,
			pandoraLoggedIn: false,
			playEmail: '',
			playPass: '',
			pandoraEmail: '',
			pandoraPass: ''
		};

		this.updateLoginState = this.updateLoginState.bind(this);
	}

	updateLoginState(service, state) {
		if (service === "play") {
			this.setState({playLoggedIn: state});
		} else if (service === "pandora") {
			this.setState({pandoraLoggedIn: state});
		}
	}

	render() {
		return (
			<div>
				<Navigation/>
				<About/>
				<h1>{this.state.playLoggedIn ? "Play Connected" : ""}</h1>
				<PlayFetch loginUpdater={this.updateLoginState}/>
			</div>
		)
	}
}

export default App;
