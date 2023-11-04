import React from "react";
import "./signup.css";

import { NavLink, useHistory } from "react-router-dom";

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

import logo from "../../content/img/omnifood-logo.png";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const { signUp, user, setUser } = useContext(AuthContext);
  let history = useHistory();

  const warn = () => toast.warn("Enter Data !");
  const success = () =>
    toast.success("Successfully Signed Up !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const error = () =>
    toast.error("Account already exist ! , Try with new email id", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [name, setName] = useState("");

  useEffect(() => {
    const lastUser = localStorage.getItem("omnifood_user");

    setUser(JSON.parse(lastUser));

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

  async function SignupButton() {
    try {
      if (email && password && confirmPassword && name) {
        let isSigned = await signUp(name, password, email, confirmPassword);
        if (isSigned) {
          success();
          history.push("/");
        } else {
          error();
        }
      } else {
        warn();
      }
    } catch (e) {
      // console.log(e.message);
    }
  }
  return (
    <>
      {/* -----------------------Warning of passsword not entered----------- */}
      <ToastContainer
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
      />
      {/* ------------------------------------------------------------ */}{" "}
      {user ? (
        history.push("/")
      ) : (
        <>
          {" "}
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
              <div className="email">
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
      )}
    </>
  );
}

export default Signup;
