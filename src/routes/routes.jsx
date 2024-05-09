import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AddProduct from "../components/Brands/ProductDetails/AddProduct";

import PrivateRoute from "./PrivateRoute";
import AboutUs from "../components/AboutUs/AboutUs";
import Brand from "../components/Brands/Brand";
import ProductUpdate from "../components/Brands/ProductDetails/ProductUpdate";
import BrandDetails from "../components/Brands/ProductDetails/ProductDetails";
import MyCart from "../components/MyCart/MyCart";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Home from "../components/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader:()=> fetch('/products.json')
      },
      {
        path: ":brand",
        element:<Brand></Brand>,
        loader:()=> fetch('/products.json')
      },
      {
        path: ":brand/details/:id",
        element:<BrandDetails/>,
    
      },
    
      {
        path: "addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "mycart",
        element: (
          <PrivateRoute>
            <MyCart/>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "register",
        element: <Register/>,
      },
    
      {
        path: "updateProduct/:id",
        element: (
          <PrivateRoute>
            <ProductUpdate></ProductUpdate>
          </PrivateRoute>
        ),
      },

    ],
  },
]);

export default router;
