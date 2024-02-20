import React from "react";
import logo from './assets/Logo.png'
import './Styles/Home.css'
import Search from "./Search";
function Home(){
      return(
      <div className='Home'>
        <img className='image' src={logo} alt="logo" />
        <Search/>
      </div>);
}

export default Home