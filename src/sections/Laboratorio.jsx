import React, { Component } from "react";
import imagen from "../assets/img/laboratorio.jpg"
import Chevron from '../components/icons/chevron-down'

class Laboratorio extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.src = this.src.bind(this)
  }
  render() {
    return (
      <section className="section servicios recursos columnas planificacion laboratorio" id="laboratorio">

        <article className="section__left">
          <div className="recursos__top">
            Laboratorio
          </div>
          <h2 className="section__title">
            Equipo de Laboratorio
          </h2>
          <ul className="planificacion__list">
            <li>Para verificación de calidad de los materiales.</li>
            <li>Para estudios geotécnicos.</li>
            <li>Para concretos hidráulicos.</li>
            <li>Para extracción de corazones.</li>
            <li>Para pruebas de asfalto.</li>
            <li>Para medición de retroreflectividad en señalamientos.</li>
          </ul>
          <a href="#equipo" className="section__next">
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

export default Laboratorio;
