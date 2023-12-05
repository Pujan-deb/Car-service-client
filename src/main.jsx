import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './Components/Routes/MainRoutes.jsx';
import Authinfo from './Authentication/Authuser/Authinfo';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authinfo>
      <RouterProvider router={router} />
    </Authinfo>
  </React.StrictMode>,
)
