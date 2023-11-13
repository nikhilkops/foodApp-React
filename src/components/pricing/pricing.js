
import { BsCheck2Circle } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import PricingPlan from "./pricingPlan";
import PricingFeatures from "./pricingFeatures";
import customFetch from "../../utils/customFetch";
import { Bars } from "react-loading-icons";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useOmniFooodContext } from "../AllComponents"

// import { IKImage, IKUpload } from 'imagekitio-react';
function Pricing() {
  const { currentUser } = useOmniFooodContext();
  const [isLoading, setLoading] = useState(false)
  const handlePricingButton = async (e) => {
    try {
      if (!currentUser) {
        toast.error(`User is not Logged In`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2500, // milliseconds
          style: {
            fontSize: '18px', // Set the desired font size
          }
        });
      }
      const { name, lastName, email, location, _id } = currentUser.user;
      setLoading(true)
      const documentID = e.target.id;
      const keyResponse = await customFetch.get(`/payment/key`);
      const pricing = await customFetch.post(`/payment/checkout/${documentID}`);
      const { planType, price } = pricing.data.cPlan;
      const { amount, id } = pricing.data;
      const key = keyResponse.data.key;
      //CALLBACK_URL
      let CALLBACK_URL = 'https://foodapp-react-sctz.onrender.com/api/v1/payment/payment-verification'
      if (process.env.NODE_ENV === 'development') CALLBACK_URL = 'http://localhost:3000/api/v1/payment/payment-verification'

      const options = {
        key: key,
        amount: amount,
        currency: "INR",
        name: `Payment`,
        description: `OmniFood payment for Plan-Type: ${planType} ,Priced at INR ${price}`,
        image: "https://i.ibb.co/t3tXx5M/omnifood-logo.png",
        order_id: id,
        callback_url: CALLBACK_URL,
        prefill: {
          name: name + " " + lastName,
          email: email,
          contact: "9999999999"
        },
        notes: {
          "address": location,
          "userID": _id,
          "productID": documentID
        },
        theme: {
          "color": "#e67e22"
        }
      };
      const razor = new window.Razorpay(options)
      razor.open()
    }
    catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <section class="section-pricing">
      {/* <IKImage path="/default-image.jpg" transformation={[{
    "height": "300",
    "width": "400"
  }]} /> 
  */}
      <div class="container">
        <span class="subheading">Pricing</span>
        <h2 class="heading-secondary">Eating well without breaking the bank</h2>
      </div>

      <div class="container grid grid--2-cols margin-bottom-md pricing-query">
        {Object.keys(PricingPlan).map((key) => {
          const plan = PricingPlan[key];
          return (
            <div
              class={
                plan["isComplete"] === `0`
                  ? "pricing-plan pricing-plan--starter"
                  : "pricing-plan pricing-plan--complete"
              }
            >
              <header class="plan-header">
                <p class="plan-name">{plan["planType"]}</p>
                <p class="plan-price">
                  <span>₹</span>
                  {plan["pricing"]}
                </p>
                <p class="plan-text">
                  per month. That's just ₹{plan["permonth"]} per meal!
                </p>
              </header>
              <ul class="list">
                {plan["featuresGreen"]?.map((val) => {
                  return (
                    <li class="list-item">
                      <BsCheck2Circle color="#37e913" />
                      <span>{val} </span>
                    </li>
                  );
                })}
                {plan["featuresRed"]?.map((val) => {
                  return (
                    <li class="list-item">
                      <RxCrossCircled color="#C70039" />
                      <span>{val} </span>
                    </li>
                  );
                })}
              </ul>
              {
                isLoading ? (<div className="loading-circle">
                  <Bars className="loader" stroke="#e67e22" />
                </div>) : <div class="plan-sing-up">
                  <button id={plan["_id"]} onClick={handlePricingButton} class="btn btn--full pricing-btn">Start eating well</button>
                </div>
              }

            </div>
          );
        })}
      </div>

      <div class="container grid">
        <aside class="plan-details">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>

      <div class="container grid grid--4-cols">

        {
          Object.keys(PricingFeatures).map((key) => {
            const feature = PricingFeatures[key]
            return (
              <div class="feature">
                {feature["icon"]}
                <p class="feature-title">{feature["title"]}</p>
                <p class="feature-text">
                  {feature["featureText"]}
                </p>
              </div>
            );
          })
        }

      </div>
    </section>
  );
}
export default Pricing;
