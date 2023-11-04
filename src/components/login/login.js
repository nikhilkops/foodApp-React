import React from "react";
import "./login.css";
 
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; 
import { NavLink } from "react-router-dom";
import { useState  } from "react";
import {
  SpinningCircles,
 
} from "react-loading-icons"; 

import logo from "../../img/omnifood-logo-white.png";

function Login() { 
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

 
  async function LoginButton() {
    
  }

  function fSetEmail(e) {
    let value = e.target.value;
    //remove below
    setLoading(true)
    setEmail(value);
  }
  function fSetPassword(e) {
    let value = e.target.value;
    setPassword(value);
  }
 
  return (
    <>
      {/* -----------------------Warning of passsword not entered----------- */}
      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}
    
      
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

              {loading ? (
                <div className="loading-circle">
                  <SpinningCircles fill="#e67e22" />
                </div>
              ) : (
                <>
                  {" "}
                  <div className="login_button_container" onClick={LoginButton}>
                    <div className="login_button">
                      <span>Sign In</span>
                    </div>
                  </div>
                  <div className="other_option">
                    <div className="signup">
                      <NavLink to="/forgetPassword">Forget Passsword ?</NavLink>
                    </div>

                    <div className="signup">
                      <NavLink to="/signup">Sign Up</NavLink>
                    </div>
                  </div>
                </>
              )}
            </form>
          </div>
        </>
     
    </>
  );
}

export default Login;
