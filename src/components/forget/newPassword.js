import React, { useState, useEffect } from "react";
import "./otp.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/omnifood-logo-white.png"
import { useSearchParams } from 'react-router-dom';
import customFetch from "../../utils/customFetch";
import "./newPassword.css";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { SpinningCircles } from "react-loading-icons";


import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function NewPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(true)
  const token = useSearchParams()[0].get("token");
  function toggleShow() {
    setShowPassword((prev) => !prev)
  }
  function fPassword(e) {
    setPassword(() => e.target.value)
  }
  function fconfirmPassword(e) {
    setConfirmPassword(() => e.target.value)
  }

  async function resetPassword() {
    setLoading(true);
    if (password == confirmPassword) {
      const cUser = await customFetch.patch("/auth/resetPassword", { token, password });
      if (cUser.data == 'jwt expired') {
        toast.error(` Reset Link Expired !`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2500, // milliseconds
          style: {
            fontSize: '18px', // Set the desired font size
          }
        });
        navigate("/forgotPassword")
        return;
      }
      toast.success(` Password Changed Sucessfully !`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500, // milliseconds
        style: {
          fontSize: '18px', // Set the desired font size
        }
      });
      navigate("/login")
    }
    else {
      toast.error(` Password & Confirm Password Does'nt Match !`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500, // milliseconds
        style: {
          fontSize: '18px', // Set the desired font size
        }
      });
    }
    setLoading(false);
  }
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    return () => { };
  });
  return (
    <>
      <div className="authorize-background"></div>
      <div className="container-login otp newPassword">
        <div className="image_container">
          <img className="logo-container" alt="omnifood logo" src={logo} />

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
          <span>New Password</span>
          <div className="email gap-1rem">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="New Password"
              value={password}
              onChange={fPassword}
              autoComplete="off"
            />

            <div onClick={toggleShow}>
              {" "}
              {showPassword ? (
                <AiOutlineEye className="visiblity" />
              ) : (
                <AiOutlineEyeInvisible className="visiblity" />
              )}
            </div>
          </div>

          <span>Confirm Password</span>
          <div className="email gap-1rem">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Confirm Password"
              value={confirmPassword}
              autoComplete="off"
              onChange={fconfirmPassword}
            />

            <div onClick={toggleShow}>
              {" "}
              {showPassword ? (
                <AiOutlineEye className="visiblity" />
              ) : (
                <AiOutlineEyeInvisible className="visiblity" />
              )}
            </div>
          </div>

          <div className="login_button_container" onClick={resetPassword}>
            <div className="login_button" >
              <span>Submit</span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewPassword;
