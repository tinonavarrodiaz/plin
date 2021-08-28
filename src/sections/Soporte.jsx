import React, { Component } from "react";
import imagen from "../assets/img/servicio.jpg"
import Chevron from '../components/icons/chevron-down'
import ServiciosTop from "../components/ServiciosTop";

class Soporte extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.src = this.src.bind(this)
  }
  render() {
    return (
      <section className="section servicios columnas planificacion soporte" id="soporte">
        <ServiciosTop />
        <article className="section__left">
          <h2 className="section__title">
            Soporte
            <p>Campo / Laboratorio</p>
          </h2>
          <ul className="planificacion__list">
            <li>Mecánica de suelos, geotecnia.</li>
            <li>Control de calidad en materiales y agua.</li>
            <li>Topografía, topohidráulica y batimetría.</li>
            <li>Retroreflectividad para señalamiento horizontal y vertical.</li>
            <li>Apoyo aéreo para diagnóstico de infraestructuras existentes, en proceso o siniestrados, mediante la aplicación de tecnología Vant (drones).</li>


          </ul>
          <a href="#consultoria" className="section__next">
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

export default Soporte;
