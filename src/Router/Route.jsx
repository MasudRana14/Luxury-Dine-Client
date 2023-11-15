import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import AllFoodItems from "../Pages/AllFoodItems/AllFoodItems";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import OurChef from "../Pages/OurChef/OurChef";
import Details from "../Pages/Details/Details";
import FoodPurchase from "../Pages/FoodPurchase/FoodPurchase";


const myRoute = createBrowserRouter([


    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: "/addfood",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: "/allfood",
                element: <AllFoodItems></AllFoodItems>,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: "/blog",
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: "/contact",
                element: <PrivateRoute><Contact></Contact></PrivateRoute>
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
                path: "/purchase/:id",
                element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
                
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: "/ourchef",
                element: <OurChef></OurChef>
            },
            {
                path: "/purchase",
                element: <FoodPurchase></FoodPurchase>
            }

        ]
    }

])






export default myRoute;