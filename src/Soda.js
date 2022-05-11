import React from "react";
import { Link } from "react-router-dom";

function Soda() {
	return (
		<div>
			<h1>Soda</h1>
			<img src="https://www.fodors.com/wp-content/uploads/2019/03/HERO_Worlds_Best_Soda_Bundaberg_shutterstock_679079920.jpg"
			alt="Vareity of Soda">
			</img>
			<p> Sparklyyy </p>
			<Link to='/'>Go Back to Vending Machine</Link>

		</div>
	)
}

export default Soda 
