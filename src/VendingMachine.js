import React from "react";
import { NavLink } from "react-router-dom";

const VendingMachine = () => {
	return (
		<nav>
      <h1> Hello I Am Your Vending Machine</h1>
      <h2>What would you like to pick?</h2>
        {/* <NavLink to='/'>Home</NavLink> */}
        <NavLink to="/chips">Chips</NavLink>
        <NavLink to="/soda">Soda</NavLink>
        <NavLink to='/chocolate'>Chocolate</NavLink>
      </nav>
	)
}

export default VendingMachine