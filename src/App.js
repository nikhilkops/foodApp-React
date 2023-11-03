import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";

import Featured from "./components/featured/Featured";
import How from "./components/How/How"
import Meals from './components/Meals/Meals'
import Testinomials from "./components/testinomials/testinomials";
import Pricing from './components/pricing/pricing'
import Cta from './components/cta/cta'

import {  Routes, Route } from "react-router-dom";
 import './components/css/general.css';
 import './components/css/queries.css';
 import './components/css/style.css';
function App() {
 
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <Featured></Featured>
    <How></How>
    <Meals></Meals>
    <Testinomials></Testinomials>
    <Pricing></Pricing>
    <Cta></Cta>
     <Routes>
      <Route exact="/" element={Header}/>
     </Routes>
    </>
  );
}

export default App;
