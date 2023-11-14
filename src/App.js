// import Header from "./components/Header/header";
// import Hero from "./components/Hero/hero";
// import Featured from "./components/featured/Featured";
// import How from "./components/How/How";
// import Meals from "./components/Meals/Meals";
// import Testinomials from "./components/testinomials/testinomials";
// import Pricing from "./components/pricing/pricing";
// import Cta from "./components/cta/cta";
import Sucessfull from "./components/Payment Successfull/Sucessful";
import Login from "./components/login/login";
import Signup from './components/signup/signup'
import AllComponents from "./components/AllComponents";
import { useEffect, useState, createContext, useContext } from 'react'

import {
  Route,
  Routes,
} from "react-router-dom";
import customFetch from "./utils/customFetch";

import "./components/css/general.css";
import "./components/css/queries.css";
import "./components/css/style.css";

const OmniFoodContext = createContext(); 
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [reloadUser, setReloadUser] = useState(true);
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
  }, [reloadUser]);
  return (
    <>
      <OmniFoodContext.Provider value={{ currentUser, setCurrentUser,setReloadUser,reloadUser}}>

        <Routes>
          <Route path="/" element={<AllComponents />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sucessfull" element={<Sucessfull />} />
        </Routes>
      </OmniFoodContext.Provider>
    </>
  );
}
export const useOmniFooodContext = () => useContext(OmniFoodContext); 
export default App;
