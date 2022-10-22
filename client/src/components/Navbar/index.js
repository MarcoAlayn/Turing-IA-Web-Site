import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to={"/"}>Inicio</NavLink>
      <NavLink to={"/servicios"}>Servicios</NavLink>
      <NavLink to={"/contacto"}>Contacto</NavLink>
    </nav>
  );
}

export default Navbar;
