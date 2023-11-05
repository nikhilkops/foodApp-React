import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import customFetch from "../../utils/customFetch";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// sd
import axios from "axios";

async function test() {
  try { 
    //  console.log("Hello I am in test function")
    // const data = await customFetch.get("/test");
    // const helloJSON = await customFetch.get("/hello");

    const test = await axios('/api/v1/test')
    console.log(test)
    // console.log(helloJSON);
    // console.log(data);
  } catch (error) {
    console.log(error)
  }
}


function Header() {
  test();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header id="header" className={menuOpen ? "header nav-open" : "header"}>
      <NavLink to="/">
        <img
          class="logo"
          alt="Omnifood logo"
          src="https://i.ibb.co/t3tXx5M/omnifood-logo.png"
        />
      </NavLink>
      <nav class="main-nav">
        <ul class="main-nav-list">
          <li>
            <NavLink to="/" className="main-nav-link">
              How it works
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="main-nav-link">
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="main-nav-link">
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="main-nav-link">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="main-nav-link nav-cta">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <AiOutlineMenu
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="icon-mobile-nav"
          name="menu-outline"
        />
        <AiOutlineClose
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="icon-mobile-nav"
          name="close-outline"
        />
      </button>
    </header>
  );
}

export default Header;
