import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Product from "../Pages/Product/Product";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element:<Product></Product>
        },
        
      ]
    },
    {
      path: '/login',
      element:<Login></Login>
   },
  {
    path: '/register',
    element:<Register></Register>
  },
  ]);