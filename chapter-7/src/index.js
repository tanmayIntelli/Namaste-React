import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/body";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Notfound from "./Components/notfound";
import About from "./Components/about";
import Contact from "./Components/contact";
import Cart from "./Components/cart";
import Login from "./Components/login";
import RestaurantDetails from "./Components/restaurantDetails";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Notfound />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
