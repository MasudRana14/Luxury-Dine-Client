import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AddFood from "../Pages/AddFood/AddFood";
import AllFoodItems from "../Pages/AllFoodItems/AllFoodItems";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import OurChef from "../Pages/OurChef/OurChef";
import Details from "../Pages/Details/Details";


const myRoute = createBrowserRouter([


    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addfood",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path:"/allfood",
                element:<PrivateRoute><AllFoodItems></AllFoodItems></PrivateRoute>,
                loader:()=> fetch('http://localhost:5000/foods')
            },
            {
                path:"/blog",
                element:<PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path:"/contact",
                element:<PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path:"/details/:id",
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path:"/ourchef",
                element:<OurChef></OurChef>
            }

        ]
    }

])






export default myRoute;