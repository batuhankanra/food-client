import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import Recipe from "../pages/recipe";
import RecipeId from "../pages/recipe/recipeId";
import About from "../pages/about";
import Restorant from "../pages/restrorant";
import FoodAdmin from "../pages/foodAdmin";



export const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/recipe',
                element:<Recipe />
            },
            {
                path:'/recipe/:category',
                element:<RecipeId />
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/restaurant',
                element:<Restorant />
            },
            {
                path:'/tarifAdmin',
                element:<FoodAdmin/>
            },
            {
                path:'/*',
                element:<NotFound />
            }
        ]
    }
])