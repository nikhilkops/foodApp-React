import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Dropdown from "../../utils/dropdown";
import { useOmniFooodContext } from "../AllComponents"
function Header() {
  const { currentUser } = useOmniFooodContext();
 
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

          {currentUser ? (
            <li>
              <Dropdown user={currentUser.user.name} />
            </li>
          ) : (
            <>
              <li>

                <NavLink to="/login" className="main-nav-link nav-cta">
                  Login

                </NavLink>
              </li>
              <li>

                <NavLink to="/signup" className="main-nav-link nav-cta">
                  Signup

                </NavLink>
              </li>
            </>
          )}

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
