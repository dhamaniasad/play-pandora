import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from "./components/App";


ReactDOM.render(
	<App />,
	document.getElementById("react-root")
);