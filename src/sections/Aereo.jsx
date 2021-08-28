import React, { Component } from "react";
import imagen from "../assets/img/aereo.jpg"
import Chevron from '../components/icons/chevron-down'
import ServiciosTop from "../components/ServiciosTop";

class Aereo extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.src = this.src.bind(this)
  }
  render() {
    return (
      <section className="section servicios columnas planificacion aereo" id="aereo">
        <ServiciosTop />
        <article className="section__left">
          <ul className="planificacion__list">
            <li>Ingeniería integral, básica o de detalle, en plataformas, pistas y calles de rodaje.</li>
            <li>Estudios de movimientos de aeronaves.</li>
            <li>Diseño geométrico.</li>
            <li>Diseño de sistemas de drenaje para desalojo de aguas pluviales en pistas y plataformas.</li>
            <li>Diseño de sistemas de alumbrado de plataformas y ayudas visuales.</li>
            <li>Medición de índice de perfil, levantamiento de deterioros y medición de deflexiones.</li>
            <li>Estudio y determinación de capacidad de carga (PCN)</li>
            <li>Ingeniería ambiental y ecológica</li>
            <li>Análisis de impactos y riesgos.</li>
            <li>Administración y control integral de contratos de obra.</li>



          </ul>
          <a href="#puerto" className="section__next">
            <Chevron />
          </a>
        </article>
        <article className="section__right">
          <h2 className="section__title">Ingeniería Aereoportuaria</h2>
          <img src={imagen} alt="planificacion" />
        </article>
      </section>
    )
  }
}

export default Aereo;
