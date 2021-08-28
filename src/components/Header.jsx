import React , {Component} from "react";
import Img from '../assets/images'
class Header extends Component{

  constructor(props){
    super(props)
    this.state = {
      imgMenuWidth: 0,
    }
    // this.src = this.src.bind(this)
  }

  render() {
    return (
      <header className="main-header" id="main-header">
        <nav className="main-nav" id="main-nav">
          <ul className="main-menu" id="main-menu">
            <li className="main-menu__item" >
              <a href="#somos" className="main-menu__link">
                <img src={Img.somos} alt=""/>
                <span>Somos</span>
              </a>
            </li>
            <li className="main-menu__item">
              <a href="#servicios" className="main-menu__link">
                <img src={Img.servicios} alt=""/>
                <span>Servicios</span>
              </a>
            </li>
            <li className="main-menu__item">
              <a href="#experiencia" className="main-menu__link">
                <img src={Img.experiencia} alt=""/>
                <span>Experiencia</span>
              </a>
            </li>
            <li className="main-menu__item">
              <a href="#recursos" className="main-menu__link">
                <img src={Img.recursos} alt=""/>
                <span>Recursos</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  componentDidMount() {
    window.addEventListener('DOMContentLoaded',e=>{
      let link = document.querySelector('.main-menu__link')
      document.documentElement.style.setProperty('--menuImg-height', `${link.clientWidth}px`)
      const header = document.getElementById('main-header')
      const menuHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--menuText'))
      let screenHeight = window.innerHeight
      let fix = screenHeight - menuHeight
      window.addEventListener('scroll', e=>{
        let scrollY = window.scrollY
        // console.dir(document.getElementById('main-menu'))
        if (scrollY >=fix){
          // alert('fixed')
          header.classList.add('fixed')
          document.querySelector('.toTop').classList.add('is-active')
        }else{
          header.classList.remove('fixed')
          document.querySelector('.toTop').classList.remove('is-active')
        }
        // scrollY >= fix ? header.classList.add('fixed') : header.classList.remove('fixed')
      })
    })
  }
}
export default Header;