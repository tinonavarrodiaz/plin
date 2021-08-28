import React, { Component } from "react";
import image1 from "../assets/img/transporte.png"
import image2 from "../assets/img/recursos1.png"
import image3 from "../assets/img/impresora.jpg"
// import Chevron from '../components/icons/chevron-down'

class Equipo extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.src = this.src.bind(this)
  }
  render() {
    return (
      <section className="section servicios recursos columnas planificacion equipo" id="equipo">

        <article className="section__left">
          <div className="recursos__top">
            Equipo
          </div>
          <div style={{ marginBottom: "1.5em" }}>
            <h2 className="section__title">
              Equipo de Transporte
            </h2>
            <p>Amplia florilla de vihículos pickup y sedan de modelos recientes</p>
          </div>
          <img src={image1} alt="planificacion" />
        </article>
        <article className="section__center">
          <div>
            <h2 className="section__title">
              Equipo de Topografía
            </h2>
            <p>Estaciones totales, niveles fijos y posicionamiento en tiempo real y GPS.</p>
          </div>
          <img src={image2} alt="planificacion" />
        </article>
        <article className="section__right">
          <div>
            <h2 className="section__title">
              Equipo de Cómputo
            </h2>
            <ul className="planificacion__list">
              <li>Hardware y software especializado.</li>
              <li>Equipo de impresión.</li>
              <li>Equipo de fotografía y video.</li>

            </ul>
          </div>
          <img src={image3} alt="planificacion" />
        </article>
      </section>
    )
  }
}

export default Equipo;
