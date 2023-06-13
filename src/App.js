import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";

import Featured from "./components/featured/Featured";
import How from "./components/How/How"

import {  Routes, Route } from "react-router-dom";
 import './components/css/general.css';
 import './components/css/queries.css';
 import './components/css/style.css';
function App() {
  console.log(__dirname) ;
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <Featured></Featured>
    <How></How>
     <Routes>
      <Route exact="/" element={Header}/>
     </Routes>
    </>
  );
}

export default App;
