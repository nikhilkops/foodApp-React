import { IoMdNutrition } from "react-icons/io";
import { BiLeaf } from "react-icons/bi";
import { FaInfinity } from "react-icons/fa";
import { AiOutlinePauseCircle } from "react-icons/ai";
const pricingFeatures = {
  c1: {
    icon: <FaInfinity className="pricing-feature-icon" />,
    title: `Never cook again!`,
    featureText: ` Our subscriptions cover 365 days per year, even including major
            holidays.`,
  },
  c2: {
    icon: <IoMdNutrition className="pricing-feature-icon" />,
    title: `Local and organic`,
    featureText: ` Our cooks only use local, fresh, and organic products to prepare
            your meals.`,
  },
  c3: {
    icon: <BiLeaf className="pricing-feature-icon" />,
    title: `No waste`,
    featureText: ` All our partners only use reusable containers to package all your
            meals.`,
  },
  c4: {
    icon: <AiOutlinePauseCircle className="pricing-feature-icon" />,
    title: `Pause anytime`,
    featureText: `  Going on vacation? Just pause your subscription, and we refund
            unused days.`,
  },
};

export default pricingFeatures;
