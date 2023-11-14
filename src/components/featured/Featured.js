import React from 'react'
import logos from "./logos"
function Featured() {
  return (
    <section class="section-featured">
        <div class="container">
          <h2 class="heading-featured-in">As featured in</h2>
          <div class="logos">
             
            {Object.values(logos).map((value, index) => {
                  return (
                    <img
                      src={value}
                      alt="logos"
                      className="customer_image"
                      key={value + " " + index}
                      loading="lazy"
                    />
                  );
                })}
          </div>
        </div>
      </section>
  )
}

export default Featured