import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Deshboard/AllUsers/AllUsers";
import Payment from "../pages/Deshboard/Payment/Payment";
import MyCart from "../pages/Deshboard/MyCart/MyCart";
import PaymentHistory from "../pages/Deshboard/PaymentHistory/PaymentHistory";
import AdminHome from "../pages/Deshboard/AdminHome/AdminHome";
import UserHome from "../pages/Deshboard/UserHome/UserHome";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "admin",
        element: <AdminHome />
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "userhome",
        element:<UserHome/>,
    },
      {
        path: "cart",
        element: <MyCart />,
      },
      {
        path: "payment",
        element: <Payment />,
      }, {
        path: "adminHome",
        element: <AdminRoute>
          <AdminHome />
        </AdminRoute>
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
      {
        path: "users",
        element: <AllUsers />,
      },
    ],
  },
]);
