import MealsImage from "./MealsImage";
import { NavLink } from "react-router-dom";
import DietList from "./dietsList";
import { BsCheck2Circle } from "react-icons/bs";
import {AiOutlineFire} from "react-icons/ai"
import {IoRestaurantOutline} from 'react-icons/io5'
import { BiStar } from "react-icons/bi";
function Meals() {
  return (
    <section class="section-meals">
      <div class="container center-text">
        <span class="subheading">Meals</span>
        <h2 class="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div class="container grid grid--3-cols margin-bottom-md">
        <div class="meal">
          <img src={MealsImage.c1} class="meal-img" alt="Japanese Gyozas" />
          <div class="meal-content">
            <div class="meal-tags">
              <span class="tag tag--vegetarian">Vegetarian</span>
            </div>
            <p class="meal-title">Japanese Gyozas</p>
            <ul class="meal-attributes">
              <li class="meal-attribute">
                <AiOutlineFire />
                <span>
                  <strong>650</strong> calories
                </span>
              </li>
              <li class="meal-attribute">
                <IoRestaurantOutline />
                <span>
                  NutriScore &reg; <strong>74</strong>
                </span>
              </li>
              <li class="meal-attribute">
                <BiStar/>
                <span>
                  <strong>4.9</strong> rating (537)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="meal">
          <img src={MealsImage.c2} class="meal-img" alt="Avocado Salad" />
          <div class="meal-content">
            <div class="meal-tags">
              <span class="tag tag--vegan">Vegan</span>
              <span class="tag tag--paleo">Paleo</span>
            </div>
            <p class="meal-title">Avocado Salad</p>
            <ul class="meal-attributes">
              <li class="meal-attribute">
                <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                <span>
                  <strong>400</strong> calories
                </span>
              </li>
              <li class="meal-attribute">
                <ion-icon
                  class="meal-icon"
                  name="restaurant-outline"
                ></ion-icon>
                <span>
                  NutriScore &reg; <strong>92</strong>
                </span>
              </li>
              <li class="meal-attribute">
                <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                <span>
                  <strong>4.8</strong> rating (441)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="diets">
          <h3 class="heading-tertiary">Works with any diet:</h3>
          <ul class="list meal-list">
            {DietList.map((diet) => {
              return (
                <li class="list-item">
                  <BsCheck2Circle color="#37e913" />
                  <span>{diet}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div class="container all-recipes">
        <NavLink to="/" class="link">
          See all recipes &rarr;
        </NavLink>
      </div>
    </section>
  );
}
export default Meals;
