//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div classsName="BigCounter">
			<div className="Calendar">
				<i className="far fa-clock" />
			</div>
			<div className="Four" />
			<div className="Three" />
			<div className="Two" />
			<div className="One" />
		</div>
	);
}
//import your own components
import { Home } from "./component/home.js";

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
