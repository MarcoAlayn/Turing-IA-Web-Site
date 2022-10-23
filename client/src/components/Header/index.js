/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../Navbar";
import "./header.css";
import Brand from "../Brand";

function Header({ video }) {
  return (
    <header className="headerContainer">
      <div className="overlay"></div>
      <video src={video} autoPlay muted loop />
      <Brand />
      <Navbar />
    </header>
  );
}

export default Header;
