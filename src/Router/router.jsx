import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Product from "../Pages/Product/Product";
import Features from "../Pages/Features/Features";
import Pricing from "../Pages/Pricing/Pricing";
import Resources from "../Pages/Resources/Resources";
import MyTasks from "../Pages/MyTasks/MyTasks";


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
        {
          path: '/features',
          element:<Features></Features>
        },
        {
          path: '/pricing',
          element:<Pricing></Pricing>
        },
        {
          path: '/resources',
          element:<Resources></Resources>
        },
        {
          path: '/myTasks',
          element:<MyTasks></MyTasks>
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