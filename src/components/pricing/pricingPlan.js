const pricingPlan = {
  c1: {
    planType: `Starter`,
    isComplete: `0`,
    pricing: `399`,
    permonth: `13`,
    featuresGreen: [
      `1 Meal per day`,
      `Order from 11AM to 9PM`,
      `Delivery is Free`,
    ],
    featuresRed: [`Get Access to Latest Recipes`, `Meal Customization`],
  },
  c2: {
    planType: `Complete`,
    isComplete: `1`,
    pricing: `649`,
    permonth: `11`,
    featuresGreen: [
      `2 Meal per day`,
      `Order 24/7`,
      `Delivery is Free`,
      `Get Access to Latest Recipes`,
      `Meal Customization`,
    ], 
    featuresRed: [],
  },
};

export default pricingPlan;
