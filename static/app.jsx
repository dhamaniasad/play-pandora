import React from "react";
import PlayFetch from "./components/PlayFetch.jsx";
import Navigation from "./components/nav.jsx";

class App extends React.Component {
	render() {
		return (
			<div>
				<Navigation/>
				<PlayFetch/>
			</div>
		)
	}
}

export default App;
