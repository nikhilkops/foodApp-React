import { BsCheck2Circle } from "react-icons/bs";
import { IoMdNutrition } from "react-icons/io";
import { BiLeaf } from "react-icons/bi";
import { FaInfinity } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import PricingPlan from "./pricingPlan";
import { NavLink } from "react-router-dom";
function pricing() {
  return (
    <section class="section-pricing">
      <div class="container">
        <span class="subheading">Pricing</span>
        <h2 class="heading-secondary">Eating well without breaking the bank</h2>
      </div>

      <div class="container grid grid--2-cols margin-bottom-md">
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
                  <span>$</span>
                  {plan["pricing"]}
                </p>
                <p class="plan-text">
                  per month. That's just ${plan["permonth"]} per meal!
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
              <div class="plan-sing-up">
                {/* <NavLink to="/" class="link">
                   <a   class="btn btn--full">
                  Start eating well
                </a>
                </NavLink> */}
               
              </div>
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
        <div class="feature">
          <FaInfinity />
          <p class="feature-title">Never cook again!</p>
          <p class="feature-text">
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div class="feature">
          <IoMdNutrition />
          <p class="feature-title">Local and organic</p>
          <p class="feature-text">
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div class="feature">
          <BiLeaf />
          <p class="feature-title">No waste</p>
          <p class="feature-text">
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div class="feature">
          <ion-icon class="feature-icon" name="pause-outline"></ion-icon>
          <p class="feature-title">Pause anytime</p>
          <p class="feature-text">
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
}
export default pricing;
