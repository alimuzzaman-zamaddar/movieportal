
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import CreatUser from "../../CreatUser";
import UpdateUser from "../../UpdateUser";

const Router = createBrowserRouter([
    {
      path: "/",
      element:   <Main></Main> ,
      
    children:[
      {
        path: "/",
        element:  <Home></Home>,
  
      },
  
      {
        path: "create",
        element:   <CreatUser></CreatUser>,
  
      },
      {
        path: "update/:id",
        element:   <UpdateUser></UpdateUser> ,
      },

    ]
    },
  

]);




export default Router;
