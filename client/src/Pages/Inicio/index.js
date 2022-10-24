import React from "react";
import Header from "../../components/Header";
import video from "../../assets/Inicio.mp4";
import "./Inicio.css";
import ButtonInicio from "../../components/ButtonInicio";

function Inicio() {
  return (
    <div className="inicioContainer">
      <Header video={video} />
      <h2 className="queHacemos">QUIENES SOMOS</h2>
      <p className="parrafo">
        Turing-IA es una empresa de consultoría global de tecnología y negocios
        que brinda soluciones que aportan al éxito de las empresas.
      </p>
      <ButtonInicio />
    </div>
  );
}

export default Inicio;
