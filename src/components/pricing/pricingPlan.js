import customFetch from "../../utils/customFetch";
async function getPricing() {
  const cachedData = localStorage.getItem("PricingPlans")
  if (cachedData) return JSON.parse(cachedData); 
  try {
    const pricing = await customFetch.get("/pricing/pricing-plans");
    localStorage.setItem("PricingPlans", JSON.stringify(pricing.data)); 
    return pricing.data
  } catch (error) {

  } 
}
const pricingPlan = await getPricing()  
export default pricingPlan;
