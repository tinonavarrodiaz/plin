import React, { Component } from "react";
import imagen from "../assets/img/consultoria2.jpg"
import Chevron from '../components/icons/chevron-down'
import ServiciosTop from "../components/ServiciosTop";

class Consultoria extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.src = this.src.bind(this)
  }
  render() {
    return (
      <section className="section servicios columnas planificacion consultoria" id="consultoria">
        <ServiciosTop />
        <article className="section__left">

          <ul className="planificacion__list">
            <li>Avalúos de infraestructura, bienes muebles e inmuebles, proyectos en marcha, maquinaria y equipo.</li>
            <li>Asistencia técnica, jurídica y social para la liberación de derechos de vía, así como para la desincorporación de tierras sujetas al régimen de propiedad social.</li>
            <li>Inventarios físicos de infraestructura.</li>
            <li>Asesoría especializada a entidades gubernamentales.</li>
            <li>Representación y asistencia técnica a constructores y desarrolladores.</li>
            <li>Revisión técnica de proyectos de infraestructura.</li>
            <li>Ingeniería de gestión en todas las fases de los proyectos de infraestructura.</li>
            <li>Auditorías técnicas y administrativas de obras y proyectos.</li>
            <li>Software para el control sistematizado de proyectos (próximamente).</li>



          </ul>
          <a href="#laboratorio" className="section__next">
            <Chevron />
          </a>
        </article>
        <article className="section__right">
          <h2 className="section__title">
            Consultoría
          </h2>
          <img src={imagen} alt="planificacion" />
        </article>
      </section>
    )
  }
}

export default Consultoria;
