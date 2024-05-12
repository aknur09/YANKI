import React from 'react'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
  <div className="footerYanky">
        <h5>КОМПАНИЯ</h5>
        <h5>ПОЛЕЗНОЕ</h5>
        <h5>ПОКУПАТЕЛЮ</h5>
        <h5>КОНТАКТЫ</h5>
  </div>
  <div className="footer-text">
  <NavLink to="/about">
    <li>О нас</li></NavLink>
  <NavLink to="/contacts">Контакты</NavLink>
  </div>
  
      </footer>
    </div>
  )
}

export default Footer