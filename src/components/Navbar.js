import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Contact List</NavLink>
      <NavLink to="/add">Add Contact</NavLink>
    </nav>
  );
};

export default Navbar;
