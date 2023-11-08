import React ,{useEffect} from "react";
import "./signup.css";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


import logo from "../../img/omnifood-logo-white.png";

function Signup() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [name, setName] = useState("");
  let[city,setCity] = useState("");
  function fSetName(e) {
    setName(e.target.value);
  }
  function fSetEmail(e) {
    setEmail(e.target.value);
  }
  function fSetPassword(e) {
    setPassword(e.target.value);
  }
  function fSetConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }
  function LoginButton() {

  }
  // function userInput(props)
  // {
  //   return (
  //     <input
  //       type="text"
  //       placeholder="Name"
  //       value={name}
  //       onChange={fSetName}
  //       autoComplete="on"
  //     />
  //   );
  // }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Using a free reverse geocoding service like Nominatim
        const reverseGeocodingURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

        try {
          const response = await axios.get(reverseGeocodingURL);
          const data = response.data;
          const city = data.address.city; 
          setCity(city);
        } catch (error) {
          console.error("Error fetching city data: " + error);
        }
      });
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  }, []);
  async function SignupButton() { }
  return (
    <>
      {" "}
      <div className="authorize-background"></div>
      <div className="container-login">
        <div className="image_container">
          <img className="logo-container" alt="Logo" src={logo} />

          <NavLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="close"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </NavLink>
        </div>

        <form className="login_info">
          <div className="email">
            <input
              type="text"
              placeholder="First Name"
              value={email}
              onChange={fSetEmail}
              autoComplete="on"
            />
          </div>
          <div className="email">
            <input
              type="text"
              placeholder="LastName"
              value={email}
              onChange={fSetEmail}
              autoComplete="on"
            />
          </div>
          <div className="email">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={fSetEmail}
              autoComplete="on"
            />
          </div>
          <div className="email">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={fSetEmail}
              autoComplete="on"
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={fSetPassword}
              autoComplete="on"
            />
          </div>

          <div className="password">

            <input
              type="password"
              placeholder="Conform Password"
              value={password}
              onChange={fSetPassword}
              autoComplete="on"
            />
          </div>


          <>
            {" "}
            <div className="login_button_container" onClick={LoginButton}>
              <div className="login_button">
                <span>Sign Up</span>
              </div>
            </div>
            <div className="other_option">

              <div className="signup">
                <NavLink to="/signup">Sign In</NavLink>
              </div>
            </div>
          </>

        </form>
      </div>
    </>
  );
}

export default Signup;
