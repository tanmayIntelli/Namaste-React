import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/body";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Notfound from "./Components/notfound";
import Contact from "./Components/contact";
import Cart from "./Components/cart";
import Login from "./Components/login";
import RestaurantDetails from "./Components/restaurantDetails";
import ParentClass from "./Components/classBasedParent";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/contact"));

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./Components/shimmer";

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
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "parent",
            element: <ParentClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
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
