import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Router from './Components/Router/Router';




ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="">
    <React.StrictMode >
      <RouterProvider router={Router} />
    </React.StrictMode>
  </div>
);