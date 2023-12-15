import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import AddProduct from "../components/AddProduct";
import MyCart from "../components/MyCart";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";
import Apple from "../components/Brands/Apple";
import Nokia from "../components/Brands/Nokia";
import Samsung from "../components/Brands/Samsung";
import Google from "../components/Brands/Google";
import Sony from "../components/Brands/Sony";
import Huawei from "../components/Brands/Huawei";

import HuaweiUpdate from "../components/BrandUpdate/HuaweiUpdate";
import AppleUpdate from "../components/BrandUpdate/AppleUpdate";
import SonyUpdate from "../components/BrandUpdate/SonyUpdate";
import SamsungUpdate from "../components/BrandUpdate/SamsungUpdate";
import GoogleUpdate from "../components/BrandUpdate/GoogleUpdate";
import NokiaUpdate from "../components/BrandUpdate/NokiaUpdate";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                path: 'addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: 'mycart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'apple',
                element: <Apple></Apple>,
                loader: ()=> fetch('http://localhost:5000/product'),
            },
            {
                path: 'nokia',
                element: <Nokia></Nokia>,
                loader: ()=> fetch('http://localhost:5000/product'),
            },
            {
                path: 'samsung',
                element: <Samsung></Samsung>,
                loader: ()=> fetch('http://localhost:5000/product')
            },
            {
                path: 'Google',
                element: <Google></Google>,
                loader: ()=> fetch('http://localhost:5000/product'),
            },
            {
                path: 'sony',
                element: <Sony></Sony>,
                loader: ()=> fetch('http://localhost:5000/product'),
            },
            {
                path: 'huawei',
                element: <Huawei></Huawei>,
                loader: ()=> fetch('http://localhost:5000/product'),
            },
            {
                path: 'huawei/updateProduct/:id',
                element: <PrivateRoute><HuaweiUpdate></HuaweiUpdate></PrivateRoute>,
                loader : ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: 'apple/updateProduct/:id',
                element: <PrivateRoute><AppleUpdate></AppleUpdate></PrivateRoute>,
                loader : ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: 'sony/updateProduct/:id',
                element: <PrivateRoute> <SonyUpdate></SonyUpdate> </PrivateRoute>,
                loader : ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: 'samsung/updateProduct/:id',
                element: <PrivateRoute><SamsungUpdate></SamsungUpdate></PrivateRoute>,
                loader : ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: 'google/updateProduct/:id',
                element: <PrivateRoute><GoogleUpdate></GoogleUpdate></PrivateRoute>,
                loader : ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: 'nokia/updateProduct/:id',
                element: <PrivateRoute> <NokiaUpdate></NokiaUpdate> </PrivateRoute>,
                loader : ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
            },
            
        ]
    }
])

export default router;