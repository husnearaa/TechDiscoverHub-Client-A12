import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";



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
                path: '/login',
                element: <Login></Login>,
            },
          
        ]
    }
])

export default myCreatedRoute;