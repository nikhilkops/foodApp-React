import { NavLink } from "react-router-dom";
import DietList from "./dietsList";
import { BsCheck2Circle } from "react-icons/bs";
 
import MealCard from "./MealCard";
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
        {Object.keys(MealCard).map((key) => {
          const mealCard = MealCard[key];
          return (
            <div class="meal">
              <img src={mealCard.img} class="meal-img" alt={mealCard.title} />
              <div class="meal-content">
                <div class="meal-tags">
                  {Object.keys(mealCard["foodType"]).map((typeKey) => {
                    const type = mealCard["foodType"][typeKey];
                    return (
                      <span class="tag" style={{ backgroundColor: type[1] }}>
                        {type[0]}
                      </span>
                    );
                  })}
                </div>
                <p class="meal-title">Japanese Gyozas</p>
                <ul class="meal-attributes">

                {
                  Object.keys(mealCard["features"]).map((featureKey)=>{
                    const feature = mealCard["features"][featureKey]
                    return (
                      <li class="meal-attribute">
                        {feature[0]}
                        <span>
                          <strong> {feature[1]}</strong> 
                        </span>
                      </li>
                    ); 
                  })
                }
                  
                </ul>
              </div>
            </div>
          );
        })}
        

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
