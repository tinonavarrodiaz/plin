import React, { Component } from "react";
import imagen from "../assets/img/hidro.jpg"
import Chevron from '../components/icons/chevron-down'
import ServiciosTop from "../components/ServiciosTop";

class Hidro extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.src = this.src.bind(this)
  }
  render() {
    return (
      <section className="section servicios columnas planificacion hidro" id="hidro">
        <ServiciosTop />
        <article className="section__left">
          <h2 className="section__title">Ingeniería Hidraúlica</h2>
          <ul className="planificacion__list">
            <li>Estudios hidrológicos y topohidráulicos para delimitación de zonas federales.</li>
            <li>Ingeniería básica y de detalle para obras de infraestructura hidráulica.</li>
            <li>Diseño de redes de agua potable, alcantarillado sanitario y solución pluvial, en medios
              rurales y urbanos.</li>
            <li>Proyecto de línea de alejamiento de aguas pluviales y sanitarias (diseño de colectores)</li>.
            <li>Proyectos ejecutivos para rectificación de cauces de arroyos.</li>
            <li>Proyecto y supervisión de zonas de riego.</li>
            <li>Diseño estructural de obras hidráulicas.</li>
            <li>Asesoría para la elección de tipo de tratamiento de aguas sanitarias.</li>
            <li>Ingeniería ambiental y ecológica.</li>
            <li>Análisis de impactos y riesgos.</li>
            <li>Administración y control integral de contratos de obra.</li>
            <li>Equipo hidráulico superficial y subterráneo,</li>
            <li>Diseño y modulación hidraúlica de cárcamos de bombeo.</li>

          </ul>
          <a href="#soporte" className="section__next">
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

export default Hidro;
