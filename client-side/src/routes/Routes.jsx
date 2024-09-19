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
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHom/AdminHome";
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
          path:'userHome',
          element:<UserHome/>
        },
        {
          path:"cart",
          element:<Cart/>
        },
        {
          path:'payment',
          element:<Payment/>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory/>
        },
        // admin routes
        {
          path:'adminHome',
          element:<AdminRoute><AdminHome/></AdminRoute>
        },
        {
          path:'addItem',
          element:<AdminRoute><AddItem/></AdminRoute>
        },
        {
          path:'manageitems',
          element:<AdminRoute><ManageItems/></AdminRoute>
        },
        {
          path:'updateItem/:id',
          element:<AdminRoute><UpdateItem/></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path:"users",
          element:<AdminRoute><AllUsers/></AdminRoute>
        }
      ]
    }
  ]);