import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import AddProduct from "../components/AddProduct";
import MyCart from "../components/MyCart";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;