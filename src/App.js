import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";

import Featured from "./components/featured/Featured";
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
     <Routes>
      <Route exact="/" element={Header}/>
     </Routes>
    </>
  );
}

export default App;
