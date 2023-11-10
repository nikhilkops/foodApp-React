import React, { useEffect } from "react";
import "./signup.css";
import { toast } from 'react-toastify';
import { Bars } from "react-loading-icons";
import { NavLink,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import customFetch from "../../utils/customFetch";
import logo from "../../img/omnifood-logo-white.png";

function Signup() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    location: '',
    password: '',
    confirmPassword: '',
  }); 
  const navigate = useNavigate();
  function validateData() {
    const { name, lastName, email, location, password, confirmPassword } = formData;

    let errors = []
    if (name.trim() === '') {
      errors.push("Name cannot be empty.");
    }
    if (lastName.trim() === '') {
      errors.push("Last name cannot be empty.")
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '' || !emailRegex.test(email)) {
      errors.push("Invalid email address.");
    }
    if (location.trim() === '') {
      errors.push("Location cannot be empty.");
    }
    if (password.length < 8) {
      errors.push("Password should be at least 8 characters long.");
    }

    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
    }
    
    return errors;
  }
  
  const handleSignup = async (e) => {
    // You can now access form data from the formData state
    const errorMessage = validateData();
    if (errorMessage.length > 0) {
      errorMessage.forEach(error => {
        toast.error(error, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2500, // milliseconds
          style: {
            fontSize: '18px', // Set the desired font size
          }
        });
      });
      return;
    }
    try {
      setLoading(true);
      const signupCredentials = formData
      await customFetch.post("/auth/register", signupCredentials);
      toast.success(`${formData.name} has been registered !`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500, // milliseconds
        style: {
          fontSize: '18px', // Set the desired font size
        }
      });
      navigate('/')
    } catch (error) {
      toast.error(error?.response?.data?.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2500, // milliseconds
        style: {
          fontSize: '18px', // Set the desired font size
        }
      });
      setLoading(false);

      return null;
    }
    // Perform any other actions with the form data as needed
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) =>
    ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Using a free reverse geocoding service like Nominatim
        const reverseGeocodingURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

        try {
          const response = await axios.get(reverseGeocodingURL);
          const data = response?.data;
          const city = data?.address?.city;

          setFormData(prevFormData => ({
            ...prevFormData,
            location: city,
          }));
        } catch (error) {
          console.error("Error fetching city data: " + error);
        }
      });
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <>
      {" "}
      <div className="authorize-background"></div>
      <div className="container-login signup">
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

        <form className="login_info"  >
          <div className="credentials">
            <input
              type="text"
              placeholder="First Name"
              name="name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="credentials">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="credentials">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="credentials">
            <input
              type="text"
              placeholder="City"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="credentials">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="credentials">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {
            loading ?
              <div className="loading-circle">
                <Bars className="loader" />
              </div> :
              <div className="login_button_container" onClick={handleSignup} >
                <div className="login_button">
                  <span>Sign Up</span>
                </div>
              </div>
          }


          <div className="other_option">

            <div className="signup">
              <NavLink to="/signup">Sign In</NavLink>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
