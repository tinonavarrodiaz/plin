import React, {Component} from "react";
import Chevron from "./icons/chevron-down";

class ToTop extends Component {
  render() {
    return(
        <aside className="toTop">
          <Chevron/>
        </aside>
      )
  }
  componentDidMount() {
    window.addEventListener('DOMContentLoaded',e=>{
      let toTop = document.querySelector('.toTop')
      toTop.addEventListener('click', e=>{
        if (e.target.matches('.toTop') || e.target.matches('.toTop *')){
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          window.location.hash=''
        }
      })
    })
  }
}

export default ToTop