import React, { Component } from "react";
import imagen from "../assets/img/puerto.jpg"
import Chevron from '../components/icons/chevron-down'
import ServiciosTop from "../components/ServiciosTop";

class Puerto extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.src = this.src.bind(this)
  }
  render() {
    return (
      <section className="section servicios columnas planificacion puerto" id="puerto">
        <ServiciosTop />
        <article className="section__left">
          <h2 className="section__title">Ingeniería Portuaria</h2>
          <ul className="planificacion__list">
            <li>Estrategias de convivencia entre puertos y áreas naturales adyacentes.</li>
            <li>Planeación y estrategias para el desarrollo de puertos turísticos y pesqueros.</li>
            <li>Programas de mitigación de los impactos negativos generados por la operación de puertos hacia zonas urbanas.</li>
            <li>Estudios hidro-oceanográficos e hidro-fluviales para el diseño y construcción de obras portuarias. </li>
            <li>Estudios de factibilidad para la selección de alternativas de ubicación para la construcción de muelles, puertos y embarcaderos.</li>
            <li>Estudios de factibilidad para la rehabilitación de terminales portuarias.</li>
            <li>Ingeniería portuaria básica.</li>
            <li>Proyectos de modernización y ampliación.</li>
            <li>Ingeniería ambiental y ecológica.</li>
            <li>Análisis de impactos y riesgos.</li>
            <li>Administración y control integral de contratos de obra.</li>


          </ul>
          <a href="#ferro" className="section__next">
            <Chevron />
          </a>
        </article>
        <article className="section__right">
          <img src={imagen} alt="planificacion" />
        </article>
      </section>
    )
  }
}

export default Puerto;
