import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from '../pages/Login/Login';
import Register from "../pages/Register/Register";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Products from "../pages/Products/Products";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../pages/DashBoard/DashBoard";





const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/products',
                element: <Products></Products>,
            },
            {
                path: '/dashbaord',
                element: <DashBoard></DashBoard>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/products-data/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },

        ]
    }
])

export default myCreatedRoute;