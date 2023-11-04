// import Header from "./components/Header/header";
// import Hero from "./components/Hero/hero";
// import Featured from "./components/featured/Featured";
// import How from "./components/How/How";
// import Meals from "./components/Meals/Meals";
// import Testinomials from "./components/testinomials/testinomials";
// import Pricing from "./components/pricing/pricing";
// import Cta from "./components/cta/cta";
import Login from "./components/login/login";
import AllComponents from "./components/AllComponents";
import { 
  Route,
  Routes, 
} from "react-router-dom";

import "./components/css/general.css";
import "./components/css/queries.css";
import "./components/css/style.css";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<AllComponents/>}/> 
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
