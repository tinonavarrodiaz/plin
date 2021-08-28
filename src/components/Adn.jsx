import React, { Component } from "react";
import Img from '../assets/images'
import Chevron from "./icons/chevron-down";
class Adn extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    // this.src = this.src.bind(this)

  }
  render() {
    return (
      <section className="section columnas somos" id="adn">
        <article className="section__left">
          <h2 className="section__title">ADN</h2>
          <p className="somosText">
            Nuestras bases y filosofía están fundamentadas en ofrecer siempre <b>VALOR AGREGADO</b> en todos y cada uno de los proyectos, el cual está respaldado por los siguientes valores:
          </p>
          <div className="solosListContainer">
            <ul className="somosList">
              <li>Dominio Técnico</li>
              <li>Actitud</li>
              <li>Compromiso</li>
              <li>Honestidad</li>
            </ul>
            <ul className="somosList">
              <li>Profesionalismo</li>
              <li>Trabajo en equipo</li>
              <li>Actualización constante</li>
            </ul>
          </div>
          <a className="section__next" href="#planificacion">
            <Chevron />
          </a>
        </article>
        <article className="section__right">
          <img src={Img.adn} alt="somos" />
        </article>
      </section>
    )
  }
}


export default Adn;