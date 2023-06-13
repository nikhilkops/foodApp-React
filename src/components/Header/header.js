import React from 'react'
import {  NavLink } from "react-router-dom";
import logo from "https://i.ibb.co/t3tXx5M/omnifood-logo.png../../img/omnifood-logo.png" ;
// sd
function Header() {
  return (
    <header id="header" class="header">
    <NavLink to="/">
      <img class="logo" alt="Omnifood logo" src= {logo} />
    </NavLink>
    <nav class="main-nav">
      <ul class="main-nav-list">
        <li><NavLink to="/" class="main-nav-link"  >How it works</NavLink></li>
        <li><NavLink to="/" class="main-nav-link" >Meals</NavLink></li>
        <li><NavLink to="/" class="main-nav-link" >Testimonials</NavLink></li>
        <li><NavLink to="/" class="main-nav-link" >Pricing</NavLink></li>
        <li><NavLink to="/" class="main-nav-link nav-cta" >Try for free</NavLink></li>
      </ul>
    </nav>

    <button class="btn-mobile-nav">
      <ion-icon class="icon-mobile-nav" onclick="navOpen()" name="menu-outline"></ion-icon>
      <ion-icon class="icon-mobile-nav" onclick="navOpen()" name="close-outline"></ion-icon>
    </button>
      
  </header>
  )
}

export default Header