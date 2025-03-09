import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProvider from "./providers/AuthProvider";
import Orders from "./components/Orders";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./components/Profile";
import Seller from "./components/Seller";
import BookExchange from "./components/BookExchange";
import Cart from "./components/Cart";
import OldBooks from "./components/OldBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register> </Register>,
      },
      {
        path:'seller',
        element:<Seller></Seller>
      },
      {
        path:'exchange',
        element:<BookExchange></BookExchange>

      },
      {
        path:"orders",
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:'profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'oldBooks',
        element:<OldBooks></OldBooks>,
        loader:()=>fetch('http://localhost:50001/seller').then(res => res.json())
      }

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
