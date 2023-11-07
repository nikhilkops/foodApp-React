import React from "react";
import "./signup.css";

import { NavLink } from "react-router-dom"; 
import { useState, useEffect } from "react";
 

import logo from "../../img/omnifood-logo-white.png";

function Signup() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [name, setName] = useState("");

  useEffect(() => {
    const lastUser = localStorage.getItem("omnifood_user");

    // setUser(JSON.parse(lastUser));

    return () => {
      <div> </div>;
    };
  }, []);

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

  function userInput(props)
  {
    return (
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={fSetName}
        autoComplete="on"
      />
    );
  }
  async function SignupButton() {}
  return (
    <>
      <div className="authorize-background"></div>
      <div className="container-login signup">
        <div className="image_container">
          <img className="logo-container" src={logo} />

          <NavLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
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
          <div className="name">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={fSetName}
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
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={fSetConfirmPassword}
              autoComplete="on"
            />
          </div>

          <div className="login_button_container">
            <div className="login_button" onClick={SignupButton}>
              <a>Sign Up</a>
            </div>
          </div>

          <div className="other_option">
            <div className="signup">
              <NavLink to="/signin">Already Have an account ?</NavLink>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
