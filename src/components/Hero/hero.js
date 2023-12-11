import React from 'react'
import { NavLink } from "react-router-dom";
import { IKImage } from 'imagekitio-react'; 
import customer_Images from "./customerImages"
function Hero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you
            eat healthy again. Tailored to your personal tastes and
            nutritional needs.
          </p>
          <NavLink to="/" className="btn btn--full margin-right-sm"
          >Start eating well</NavLink>
          <NavLink to="/" className="btn btn--outline">Learn more &darr;</NavLink>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              {Object.values(customer_Images).map((value, index) => {
                return (
                  <> 
                  <IKImage
                    path={value}
                    className="customer_image"
                    alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                    loading="lazy"
                    lqip={{ active: true }}
                    transformation={[
                      { quality: 20 } ,
                      { format: 'webp' },
                    ]}
                  />
                  </>
                  

                  
                );
              })}
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
        <IKImage
        path="/Images/hero.png"
        className="hero-img"
        alt="Woman enjoying food, meals in storage container, and food bowls on a table"
        loading="lazy"
        lqip={{ active: true }}
        transformation={[
          { quality: 75 },
          { width: 600 },
          { width: 300, devicePixelRatio: '2' },
          { format: 'webp' },
        ]}
    />
          
        </div>
      </div>
    </section>
  )
}

export default Hero