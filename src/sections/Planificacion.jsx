import React, { Component } from "react";
import imagen from "../assets/img/planificacion.jpg"
import Chevron from '../components/icons/chevron-down'
import ServiciosTop from "../components/ServiciosTop";

class Planificacion extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.src = this.src.bind(this)
  }
  render() {
    return (
      <section className="section servicios columnas planificacion" id="planificacion">
        <ServiciosTop />
        <article className="section__left">
          <h2 className="section__title">planificacion</h2>
          <ul className="planificacion__list">
            <li>Evaluación técnica, social y económica de proyectos.</li>
            <li>Dictámenes de factibilidad técnica, económica, legal y ambiental.</li>
            <li>Jerarquización de carteras de proyectos.</li>
            <li>Estudios de ingeniería de tránsito.</li>
            <li>Estudios de selección de ruta.</li>
            <li>Planeación de corredores multimodales.</li>
            <li>Análisis de cadenas logísticas de transporte multimodal.</li>
            <li>Estudios de transporte público de pasajeros y logística urbana de cargas.</li>
            <li>Análisis y evaluación operacional de vías urbanas y carreteras.</li>
            <li>Simulaciones dinámicas de transporte multimodal.</li>
            <li>Auditorías de seguridad vial y peatonal.</li>
            <li>Planes de seguridad vial y peatonal</li>
            <li>Ingeniería ambiental y ecológica.</li>
            <li>Análisis de impactos y riesgos.</li>
            <li>Administración y control integral de contratos de obra.</li>

          </ul>
          <a href="#vial" className="section__next">
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

export default Planificacion;
