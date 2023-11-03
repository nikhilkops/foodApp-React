import { AiOutlineFire } from "react-icons/ai";
import { IoRestaurantOutline } from "react-icons/io5";
import { BiStar } from "react-icons/bi";
const MealCard = {
  c1: {
    img: require("../../img/meals/meal-1.jpg"),
    title: `Japanese Gyozas`,
    foodType: {
      t1: [`VEGETARIAN`, `#51cf66`],
    },
    features: {
      f1: [<AiOutlineFire />, `650  calories`],
      f2: [<IoRestaurantOutline />, `NutriScore ® 74`],
      f3: [<BiStar />, `4.9 rating (537)`],
    },
  },
  c2: {
    img: require("../../img/meals/meal-2.jpg"),
    title: `Avocado Salad`,
    foodType: {
      t1: [`VEGAN`, `#94d82d`],
      t2: [`PALEO`, `#ffd43b`],
    },
    features: {
      f1: [<AiOutlineFire />, `400 calories`],
      f2: [<IoRestaurantOutline />, `NutriScore ® 92`],
      f3: [<BiStar />, `4.8 rating (441)`],
    },
  },
};

export default MealCard;
