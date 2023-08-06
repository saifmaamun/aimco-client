import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      //   {
      //     path: "/product-details/:id",
      //     element: (
      //       <PrivateRoute>
      //         <ProductDetails />
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/checkout",
      //     element: (
      //       <PrivateRoute>
      //         <Checkout />,
      //       </PrivateRoute>
      //     ),
      //   },
    ],
  },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/signup",
  //     element: <Signup />,
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
]);

export default routes;
