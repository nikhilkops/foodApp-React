import React from 'react';
import ReactDOM from 'react-dom/client';

import "./components/css/general.css"
import "./components/css/style.css"
import "./components/css/queries.css"
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { BrowserRouter  } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
   <ToastContainer />
      <App />
   </BrowserRouter>
   
);
 
