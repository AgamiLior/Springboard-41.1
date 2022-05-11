import React from "react";
import { Link } from "react-router-dom";

function Chocolate() {
	return (
		<div>
			<h1>Chocolate Bar</h1>
			<img src="https://m.media-amazon.com/images/I/71eo6FC4kbL._SL1500_.jpg"
			alt="Hershey's chocolate bar">
			</img>
			<p> Milkyyyy</p>
			<Link to='/'>Go Back to Vending Machine</Link>

		</div>
	)
}

export default Chocolate 
