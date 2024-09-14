import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from './../pages/Home/Home/Home';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/Order/Order/Order';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Secret from '../pages/shared/Secret';
import PrivatRoute from './PrivatRoute';
import Dashboard from '../Layout/Dashboard';
import Cart from '../pages/Dashboard/Cart/Cart';
import AllUsers from '../pages/Dashboard/AllUesrs/AllUsers';
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home/>
        },
        {
            path:"menu",
            element:<Menu/>
        },
        {
            path:"order/:category",
            element:<Order/>
        },
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"signup",
          element:<SignUp/>
        },
        {
          path:"secret",
          element:<PrivatRoute><Secret/></PrivatRoute>
        }
      ]
    },
    {
      path:"dashboard",
      element:<PrivatRoute><Dashboard/></PrivatRoute>,
      children:[
        // normal routes
        {
          path:"cart",
          element:<Cart/>
        },
        // admin routes
        {
          path:'addItem',
          element:<AdminRoute><AddItem/></AdminRoute>
        },
        {
          path:"users",
          element:<AdminRoute><AllUsers/></AdminRoute>
        }
      ]
    }
  ]);