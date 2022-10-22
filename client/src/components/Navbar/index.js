import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbarContainer">
      <NavLink to={"/"}>inicio</NavLink>
      <NavLink to={"/servicios"}>Servicios</NavLink>
      <NavLink to={"/contacto"}>Contacto</NavLink>
    </nav>
  );
}

export default Navbar;
