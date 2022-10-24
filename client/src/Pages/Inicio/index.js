import React from "react";
import Header from "../../components/Header";
import video from "../../assets/Inicio.mp4";
import "./Inicio.css";

function Inicio() {
  return (
    <div className="inicioContainer">
      <Header video={video} />
    </div>
  );
}

export default Inicio;
