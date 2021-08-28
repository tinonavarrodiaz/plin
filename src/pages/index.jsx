import React, { Component } from "react";
import Header from "../components/Header";
import Home from "../components/home";
import Somos from "../components/Somos";
import Planificacion from "../sections/Planificacion";
import Vial from "../sections/Vial";
import Urbana from "../sections/urbana";
import Aereo from "../sections/Aereo";
import Ferro from "../sections/Ferro";
import Puerto from "../sections/Puerto";
import Hidro from "../sections/Hidro";
import Soporte from "../sections/Soporte";
import Laboratorio from "../sections/Laboratorio";
import Equipo from "../sections/Equipo";
import Consultoria from "../sections/Consultoria";
import Contacto from "../sections/Contacto";
import Adn from "../components/Adn";
import ToTop from "../components/toTop";
import AOSInit from "../helpers/Aos"

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="page-content">
        <ToTop />
        <Header />
        <Home />
        <Somos />
        <Adn />
        <div id="servicios">
        <Planificacion />
          <Vial />
          <Urbana />
          <Aereo />
          <Puerto />
          <Ferro />
          <Hidro />
          <Soporte />
          <Consultoria />
        </div>
        <div id="recursos">
        <Laboratorio />
        <Equipo></Equipo>
        </div>
        <Contacto></Contacto>
      </div>
    )
  }
  componentDidMount() {
    AOSInit()
  }
}

export default Index;
