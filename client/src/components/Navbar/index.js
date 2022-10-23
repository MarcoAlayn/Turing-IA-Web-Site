import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbarContainer">
      <NavLink to={"/"} className="textLink">
        inicio
      </NavLink>
      <NavLink to={"/servicios"} className="textLink">
        Servicios
      </NavLink>
      <NavLink to={"/contacto"} className="textLink">
        Contacto
      </NavLink>
      <NavLink to={"/nosotros"} className="textLink">
        Nosotros
      </NavLink>
    </nav>
  );
}

export default Navbar;
