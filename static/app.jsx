import React from "react";
import PlayFetch from "./components/PlayFetch.jsx";
import Navigation from "./components/nav.jsx";

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {playLoggedIn: false, pandoraLoggedIn: false};

		this.updateLoginState = this.updateLoginState.bind(this);
	}

	updateLoginState(service) {
		if (service === "play") {
			this.setState({playLoggedIn: true});
		} else if (service === "pandora") {
			this.setState({pandoraLoggedIn: true});
		}
	}

	render() {
		return (
			<div>
				<Navigation/>
				<h1>{this.state.playLoggedIn ? "Play Connected" : ""}</h1>
				<PlayFetch loginUpdater={this.updateLoginState}/>
			</div>
		)
	}
}

export default App;
