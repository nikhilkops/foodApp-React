import React, { useState } from "react";
import "./otp.css";
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import { SpinningCircles } from "react-loading-icons";
import "react-toastify/dist/ReactToastify.css";
import customFetch from "../../utils/customFetch";

import logo from "../../img/omnifood-logo-white.png"
function ForgetPassword() {
  const [loading, setLoading] = useState();
  const [email, setEmail] = useState();

  function fEmail(e) {
    setEmail(() => e.target.value)
  }
  async function sendOTP() {
    setLoading(true)
    try {
      const result = await customFetch.post("/auth/forgotPassword", { email });
      if (result.data.result) {
        toast.success(`Password Reset Link sent to ${email}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2500, // milliseconds
          style: {
            fontSize: '18px', // Set the desired font size
          }
        });
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500, // milliseconds
        style: {
          fontSize: '18px', // Set the desired font size
        }
      });
      console.log(error)
    }
    setLoading(false)
  }
  return (
    <>
      <>
        <div className="authorize-background"></div>
        <div className="container-login otp">
          <div className="image_container">
            <img className="logo-container" alt="OmniFood Logo" src={logo} />

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

          <div className="login_info otpInfo">
            <span>Please enter your email to search for your account</span>
            {loading ? (
              <div className="loading-circle">
                <SpinningCircles fill="#e67e22" />
              </div>
            ) : (
              <form className="email">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={fEmail}
                  autoComplete="on"
                />
              </form>
            )}

            <div className="login_button_container" onClick={sendOTP}>
              <div className="login_button">
                <span>Search</span>
              </div>
            </div>
          </div>
        </div>
      </>

    </>
  );
}

export default ForgetPassword;
