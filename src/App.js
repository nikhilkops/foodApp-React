import Header from "./components/Header/header";
// import Hero from "./components/Hero/hero";
import {  Routes, Route } from "react-router-dom";
 import './components/css/general.css';
 import './components/css/queries.css';
 import './components/css/style.css';
function App() {
  return (
    <>
    <Header></Header>
    {/* <Hero></Hero> */}
     <Routes>
      <Route exact="/" element={Header}/>
     </Routes>
    </>
  );
}

export default App;
