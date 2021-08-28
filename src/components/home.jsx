import React , {Component} from "react";
import Img from '../assets/images'
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    // this.src = this.src.bind(this)

  }
  render(){
    return (
      <div className="home">
        <img className="banner"  src={Img.banner} alt=""/>
        <img className="Logo" data-aos="fade-right" src={Img.logo} alt=""/>
        <h1 data-aos="fade-left">Con experiencia, capacidad y actitud ayudamos a construir un mundo mejor</h1>
      </div>
    )
  }
}

export default Home;