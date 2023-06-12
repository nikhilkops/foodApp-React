import React from 'react'
import {NavLink} from "react-router-dom";

import customer_Images from "./customerImages"
function Hero() {
  return ( 
    <section class="section-hero">
    <div class="hero">
      <div class="hero-text-box">
        <h1 class="heading-primary">
          A healthy meal delivered to your door, every single day
        </h1>
        <p class="hero-description">
          The smart 365-days-per-year food subscription that will make you
          eat healthy again. Tailored to your personal tastes and
          nutritional needs.
        </p>
        <NavLink  to="/" class="btn btn--full margin-right-sm"
          >Start eating well</NavLink>
        <NavLink to="/" class="btn btn--outline">Learn more &darr;</NavLink>
        <div class="delivered-meals">
          <div class="delivered-imgs">
          {Object.values(customer_Images).map((value, index) => {
                  return (
                    <img
                      src={value}
                      alt="Customer_Image"
                      className="customer_image"
                      key={value + " " + index}
                    />
                  );
                })}
          </div>
          <p class="delivered-text">
            <span>250,000+</span> meals delivered last year!
          </p>
        </div>
      </div>
      <div class="hero-img-box">
        <img
          src="img/hero.png"
          class="hero-img"
          alt="Woman enjoying food, meals in storage container, and food bowls on a table"
        />
      </div>
    </div>
  </section>
  )
}

export default Hero