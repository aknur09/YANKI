import React from 'react'

const Burger = () => {
  return (
//     <nav classNameName="navbar  navbar-light bg-light">
  
//   <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span classNameName="navbar-toggler-icon"></span>
//   </button>
//   <div classNameName="collapse navbar-collapse" id="navbarNav">
//     <ul classNameName="navbar-nav">
//       <li classNameName="nav-item active">
//         <a classNameName="nav-link" href="#">Home <span classNameName="sr-only">(current)</span></a>
//       </li>
//       <li classNameName="nav-item">
//         <a classNameName="nav-link" href="#">Features</a>
//       </li>
//       <li classNameName="nav-item">
//         <a classNameName="nav-link" href="#">Pricing</a>
//       </li>
//       <li classNameName="nav-item">
//         <a classNameName="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//   </div>
// </nav>

<div className="hamburger-menu">
  <input id="menu__toggle" type="checkbox" />
  <label className="menu__btn" htmlFor="menu__toggle">
    <span></span>
  </label>
  <ul className="menu__box">
    <li><a className="menu__item" href="/">Главная</a></li>
    <li><a className="menu__item" href="/kabinet">ЛИЧНЫЙ КАБИНЕТ</a></li>
     <li><a className="menu__item" href="/terms">УСЛОВИЯ ВОЗВРАТА</a></li>
    {/* <li><a className="menu__item" href="#">Блог</a></li>  */}
    <li><a className="menu__item" href="/contacts">Контакты</a></li>+
  </ul>
</div>


// import * as React from "react"; 
// import AppBar from "@mui/material/AppBar"; 
// import Box from "@mui/material/Box"; 
// import Toolbar from "@mui/material/Toolbar"; 
// import Typography from "@mui/material/Typography"; 
// import Button from "@mui/material/Button"; 
// import IconButton from "@mui/material/IconButton"; 
// import MenuIcon from "@mui/icons-material/Menu"; 
 
// export default function ButtonAppBar() { 
//   return ( 
//     <Box sx={{ flexGrow: 1 }}> 
//       <AppBar position="static"> 
//         <Toolbar> 
//           <IconButton 
//             size="large" 
//             edge="start" 
//             color="inherit" 
//             aria-label="menu" 
//             sx={{ mr: 2 }} 
//           > 
//             <MenuIcon /> 
//           </IconButton> 
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> 
//             News 
//           </Typography> 
//           <Button color="inherit">Login</Button> 
//         </Toolbar> 
//       </AppBar> 
//     </Box> 
//   ); 
// }

  )
}

export default Burger