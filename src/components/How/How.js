import React from 'react'
import images from './app_images'
import { IKImage } from 'imagekitio-react'; 

function How() {
  return (
    <section class="section-how">
      <div class="container">
        <span class="subheading">How it works</span>
        <h2 class="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <div class="container grid grid--2-cols grid--center-v">

        <div class="step-text-box">
          <p class="step-number">01</p>
          <h3 class="heading-tertiary">
            Tell us what you like (and what not)
          </h3>
          <p class="step-description">
            Never again waste time thinking about what to eat! Omnifood AI
            will create a 100% personalized weekly meal plan just for you. It
            makes sure you get all the nutrients and vitamins you need, no
            matter what diet you follow!
          </p>
        </div>
        <div class="step-img-box"> 
          <IKImage   
            path={images.c1}
            className="step-img"
            alt="App Screen 1"
            loading="lazy"
            lqip={{ active: true }}
            transformation={[
              { quality: 50 }, 
              { width: 300 }, 
              { format: 'webp' }, 
            ]}
          />
        </div>

        <div class="step-img-box">
        <IKImage   
            path={images.c2}
            className="step-img"
            alt="App Screen 1"
            loading="lazy"
            lqip={{ active: true }}
            transformation={[
              { quality: 50 }, 
              { width: 300 }, 
              { format: 'webp' }, 
            ]}
          />
        </div>
        <div class="step-text-box">
          <p class="step-number">02</p>
          <h3 class="heading-tertiary">Approve your weekly meal plan</h3>
          <p class="step-description">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add
            your own recipes.
          </p>
        </div>


        <div class="step-text-box">
          <p class="step-number">03</p>
          <h3 class="heading-tertiary">Receive meals at convenient time</h3>
          <p class="step-description">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily!
          </p>
        </div>
        <div class="step-img-box">
        <IKImage   
            path={images.c3}
            className="step-img"
            alt="App Screen 1"
            loading="lazy"
            lqip={{ active: true }}
            transformation={[
              { quality: 50 }, 
              { width: 300 }, 
              { format: 'webp' }, 
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default How