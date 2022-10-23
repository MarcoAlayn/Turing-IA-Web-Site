/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../Navbar";
import "./header.css";
import Brand from "../Brand";
import Slogan from "../Slogan";
import Button from "../Button";

function Header({ video }) {
  return (
    <header className="headerContainer">
      <div className="overlay"></div>
      <div className="regla"></div>
      <video src={video} autoPlay muted loop />
      <Brand />
      <Navbar />
      <Slogan />
      <Button />
    </header>
  );
}

export default Header;
