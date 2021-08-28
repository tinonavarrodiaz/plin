import React, { Component } from "react";
import imagen from "../assets/img/urbana.jpg"
import Chevron from '../components/icons/chevron-down'
import ServiciosTop from "../components/ServiciosTop";

class Urbana extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.src = this.src.bind(this)
  }
  render() {
    return (
      <section className="section servicios columnas planificacion urbana" id="urbana">
        <ServiciosTop />
        <article className="section__left">
          <h2 className="section__title">Ingeniería Urbana</h2>
          <ul className="planificacion__list">
            <li>Ingeniería urbana integral.</li>
            <li>Diseño de sistemas de transporte e ingeniería vial.</li>
            <li>Estudios de movilidad urbana (vial y peatonal).</li>
            <li>Estudios de accesibilidad peatonal y universal.</li>
            <li>Simulaciones dinámicas de tránsito vial y peatonal.</li>
            <li>Sistemas de agua potable y alcantarillado, colectores y fuentes de
              abastecimiento.</li>
            <li>Proyectos de semaforización, eléctricos y de iluminación.</li>
            <li>Proyectos de obras hidráulicas, plantas de tratamiento, tanques,
              redes y líneas de conducción.</li>
            <li>Proyectos de imagen, mobiliario y equipamiento urbano.</li>
            <li>Proyectos de paisajismo vial, (entorno urbano y rural).</li>
            <li>Planes maestros, lotificaciones y vialidades.</li>
            <li>Maquetas virtuales y modelación 3D.</li>
            <li>Ingeniería ambiental y ecológica.</li>
            <li>Análisis de impactos y riesgos.</li>
            <li>Administración y control integral de contratos de obra.</li>


          </ul>
          <a href="#aereo" className="section__next">
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

export default Urbana;
