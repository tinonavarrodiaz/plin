import React , {Component} from "react";
import Img from '../assets/images'
import Chevron from './icons/chevron-down'
class Somos extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    // this.src = this.src.bind(this)

  }
  render(){
    return (
      <section className="section columnas somos" id="somos">
        <article className="section__left">
          <h2 className="section__title">Somos</h2>
          <p className="somosText">
            <b>Somos un taller de ingeniería, creativo e innovador,</b>
            dedicado a la gestión y planeación de proyectos a gran escala. PLANEAMOS DISEÑAMOS Y SUPERVISAMOS LAS OBRAS QUE NUESTRAS REGIONES Y COMUNIDADES NECESITAN.
          </p>
          <p className="somosText">
            Nuestra Participación comprende los ámbitos de las vialidades urbanas y rurales, así como ferroviarias, portuarias y aereoportuarias.
          </p>
          <p className="somosText">
            Contamos con un equipo capaz, multidiciplinario y talentoso que cuenta con la experiencia y visión suficientes para PROYECTAR GRANDES OBRAS DE INGENIERÍA
          </p>
          <a href="#adn" className="section__next">
            <Chevron/>
          </a>
        </article>
        <article className="section__right">
          <img src={Img.somosBanner} alt="somos"/>
        </article>
      </section>
    )
  }
}

export default Somos;