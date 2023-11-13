import Header from "./Header/header";
import Hero from "./Hero/hero";
import Featured from "./featured/Featured";
import How from "./How/How";
import Meals from "./Meals/Meals";
import Testinomials from "./testinomials/testinomials";
import Pricing from "./pricing/pricing";
import Cta from "./cta/cta";
import { useEffect, useState } from 'react'
import customFetch from "../utils/customFetch";
function AllComponents() {
  const [currentUser, setCurrentUser] = useState(null); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await customFetch.get("/users/current-user");
        setCurrentUser(data);
      } catch (err) {
        setCurrentUser(null);
      }
    };
    fetchData();
    return () => { };
  }, []);
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Featured></Featured>
      <How></How>
      <Meals></Meals>
      <Testinomials></Testinomials>
      {

        currentUser && <Pricing></Pricing>
      }
      <Cta></Cta>
    </>
  );
}
export default AllComponents;
