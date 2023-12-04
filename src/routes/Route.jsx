import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from '../pages/Login/Login';
import Register from "../pages/Register/Register";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";
// import UserHome from "../pages/DashBoard/UserHome/UserHome";
// import ReviewHistory from "../pages/DashBoard/ReviewHistory/ReviewHistory";
import Products from "../pages/Products/Products";
import DashBoard from "../layout/DashBoard";
// import DashBoard from "../layout/DashBoard";






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
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
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
                // loader: ({ params }) => fetch(`https://tech-discover-hub-server.vercel.app/products/${params.id}`)
                loader: ({ params }) => fetch(`https://tech-discover-hub-server.vercel.app/products/${params.id}`)
            },

        ]
    },
    // {
    //     path: 'dashboard',
    //     element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    //     children: [
    //         // normal user routes
    //         {
    //             path: '/userHome',
    //             element: <UserHome></UserHome>
    //         },

    //         {
    //             path: '/reviewHistory',
    //             element: <ReviewHistory></ReviewHistory>
    //         },


    //     ]
    // }
])

export default myCreatedRoute;