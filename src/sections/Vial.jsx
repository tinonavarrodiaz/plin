import React, { Component } from "react";
import imagen from "../assets/img/vial.jpg"
import Chevron from '../components/icons/chevron-down'
import ServiciosTop from "../components/ServiciosTop";

class Vial extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.src = this.src.bind(this)
  }
  render() {
    return (
      <section className="section servicios columnas planificacion vial" id="vial">
        <ServiciosTop />
        <article className="section__left">
          <h2 className="section__title">Ingeniería Vial</h2>
          <ul className="planificacion__list">
            <li>Ingeniería integral, básica o de detalle, para carreteras y vialidades urbanas, incluyendo: puentes, viaductos, entronques, accesos y pasos a desnivel.</li>
            <li>Gerencia de obra, supervisión integral e ingeniería de sitio para dar cobertura total a las actividades de construcción de obras de infraestructura carretera.</li>
            <li>Diseño de estructuras de cruce, puentes y obras de drenaje menor.</li>
            <li>Estudios geotécnicos y de pavimentos.</li>
            <li>Evaluación de pavimentos.</li>
            <li>Ingeniería ambiental y ecológica.</li>
            <li>Análisis de impactos y riesgos.</li>
            <li>Administración y control integral de contratos de obra.</li>

          </ul>
          <a href="#urbana" className="section__next">
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

export default Vial;
