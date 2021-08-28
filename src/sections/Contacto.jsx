import React, { Component } from "react";
import imagen from "../assets/img/fondo-contacto.jpg"
import logo from "../assets/img/logoc.svg"
import phone from "../assets/img/phone.svg"
import envelope from "../assets/img/envelope.svg"
// import Chevron from '../components/icons/chevron-down'
// import ServiciosTop from "../components/ServiciosTop";

class Contacto extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.src = this.src.bind(this)
  }
  render() {
    return (
      <div className="contacto desktop" style={{backgroundImage: `url(${imagen})`, height:"100vh"}}>
        <div className="contact desktop">
          <a href="mailto: contacto@plint.com.mx" className="contact__item">
            <div className="icon">
              <img src={envelope} alt=""/>
            </div>
            <span>contacto@plint.com.mx</span>
          </a>
          <div className="contact__item">
            <div className="icon">
              <img src={phone} alt=""/>
            </div>
            <span>+52 (33) 3615-2823</span>
          </div>
        </div>
        <img src={logo} alt=""/>
        <h2>Una Empresa de Grupo GEOTICA</h2>
        <footer>
          <div className="contact mobile">
            <a href="mailto: contacto@plint.com.mx" className="contact__item">
              <div className="icon">
                <img src={envelope} alt=""/>
              </div>
              <span>contacto@plint.com.mx</span>
            </a>
            <div className="contact__item">
              <div className="icon">
                <img src={phone} alt=""/>
              </div>
              <span>+52 (33) 3615-2823</span>
            </div>
          </div>
          <p>
            PLANIFICACIÓN E INFRAESTRUCTURA TERRESTRE S.A. DE C.V.<br/>
            Callejón 6 de Mayo #11 Col. La Tijera CP: 45645 <br/>
            Zona Metropolitana de Guadalajara, Jal. MX.
          </p>
          <p>© {new Date().getFullYear()} PLANIFICACIÓN E INFRAESTRUCTURA TERRESTRE SA DE CV. Todos los derechos reservados</p>
        </footer>
      </div>
    )
  }
}

export default Contacto;
