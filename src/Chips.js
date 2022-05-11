import React from "react";
import { Link } from "react-router-dom";

function Chips() {
	return (
		<div>
			<h1>Chips</h1>
			<img src="https://m.media-amazon.com/images/I/81mABE1sNhL._SL1500_.jpg"
			alt="Vareity of Chips">
			</img>
			<p> Yum </p>
			<Link to='/'>Go Back to Vending Machine</Link>
		</div>
	)
}

export default Chips 
