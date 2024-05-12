import React from 'react'
// import HEADER from '../../assets/background.png'
// import strelkarr from '../../assets/strelkarr.png'
import { NavLink } from "react-router-dom";



const Header = ({changeVisible}) => {
  return (
    <div>
       <header>
       <nav>
    <ul>
  
<li>
<NavLink to="/">Главная</NavLink>
</li>
<li>
 <NavLink to="/catalog">КАТАЛОГ</NavLink>
 </li> 
<div className='mainTeatle'>YANKI</div>

<li onClick={changeVisible}>
<NavLink to="/user">
<i  className="bi bi-person"></i>
</NavLink>
</li>

      
<li>
<NavLink to="/favourites">
<i className="bi bi-heart"></i>
</NavLink>
</li>

<li>
<NavLink to="/cart">
<i className="bi bi-cart4"></i>
</NavLink>
</li>
   
    </ul>
</nav>
       
       </header>




    </div>
  )
}

export default Header