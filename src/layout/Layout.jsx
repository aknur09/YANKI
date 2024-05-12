import React, { useState } from 'react'
import Header from '../components/header/Header'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Contacts from '../pages/Contacts';
import Catalog from '../pages/Catalog';
import Favourite from '../pages/Favourite';
import DetailProducts from '../pages/DetailProducts';
import Footer from '../components/footer/Footer';
import Cart from '../pages/Cart';
import Hero from '../components/hero/Hero';
import SignUp from '../components/signUp/SignUp';
import User from '../pages/User';
import HeaderLogo from '../components/header-logo/HeaderLogo';
import Kabinet from '../pages/Kabinet';
import Terms from '../pages/Terms';
import SimpleSlider from '../SimpleSlider';

const Layout = () => {

  const [ isVisible, setIsVisible ] = useState(false)

  const changeVisible = () => {
    setIsVisible(true)
  }
  return (
    <div>
        <Header changeVisible={changeVisible}/>
        {isVisible && <SignUp setIsVisible={setIsVisible}/>}
      <HeaderLogo/>
      <SimpleSlider/>
        <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/contacts" element={<Contacts/>} />
        <Route  path="/catalog" element={<Catalog/>} />
        <Route  path="/favourites" element={<Favourite/>} />
        <Route  path="/detail" element={<DetailProducts/>} />
        <Route  path="/user" element={<User/>}/>
        <Route  path="/cart" element={<Cart/>}/>
        <Route  path="/terms" element={<Terms/>}/>
         <Route  path="/kabinet" element={<Kabinet/>}/>
        </Routes>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Layout