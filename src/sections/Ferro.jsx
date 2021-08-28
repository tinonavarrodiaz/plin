import React, { Component } from "react";
import imagen from "../assets/img/ferro.jpg"
import Chevron from '../components/icons/chevron-down'
import ServiciosTop from "../components/ServiciosTop";

class Ferro extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.src = this.src.bind(this)
  }
  render() {
    return (
      <section className="section servicios columnas planificacion ferro" id="ferro">
        <ServiciosTop />
        <article className="section__left">
          <h2 className="section__title">Ingeniería <span>FERROVIARIA</span></h2>
          <ul className="planificacion__list">
            <li>Asesoramiento, consultoría y ejecución de proyectos de infraestructura ferroviaria y de transporte multimodal de pasajeros y cargas.</li>
            <li>Análisis preliminares de ingeniería.</li>
            <li>Diseño geométrico.</li>
            <li>Proyectos de revalorización y reaprovechamiento de ramales ferroviarios e infraestructura de servicios preexistentes.</li>
            <li>Ingeniería ambiental y ecológica.</li>
            <li>Análisis de impactos y riesgos.</li>
            <li>Administración y control integral de contratos de obra.</li>
          </ul>
          <a href="#hidro" className="section__next">
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

export default Ferro;
