 
import Sucessfull from "./components/Payment Successfull/Sucessful"; 
import Signup from './components/signup/signup'
import AllComponents from "./components/AllComponents";
import Login from "./components/login/login";
import { useEffect, useState, createContext, useContext  } from 'react'
import {
  Route,
  Routes,
} from "react-router-dom";
import customFetch from "./utils/customFetch";

import "./components/css/general.css";
import "./components/css/queries.css";
import "./components/css/style.css";

// const Login = lazy(() => import("./components/login/login"))
const OmniFoodContext = createContext();
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [reloadUser, setReloadUser] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cUser = await customFetch.get("/users/current-user");
        const data = cUser.data; 
console.log(cUser)
        if (!data) { setCurrentUser(null) }
        setCurrentUser(data);
      } catch (err) { 
console.log(err)
        setCurrentUser(null);
      }
    };
    fetchData();
    return () => { };
  }, [reloadUser]);
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <OmniFoodContext.Provider value={{ currentUser, setCurrentUser, setReloadUser, reloadUser }}>

          <Routes>
            <Route path="/" element={<AllComponents />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sucessfull" element={<Sucessfull />} />
          </Routes>
        </OmniFoodContext.Provider>
      {/* </Suspense> */}
    </>
  );
}
export const useOmniFooodContext = () => useContext(OmniFoodContext);
export default App;
