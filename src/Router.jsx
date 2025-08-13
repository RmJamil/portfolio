import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "./Home";
import Root from "./Root";
import Details from "./Details";
import ErrorPage from "./ErrorPage";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children:[
        {
            index:true,
            path:'/',
            element:<Home></Home>
        }
    ]
  },
     {
     path:'/details/:id',
     element:<Details></Details>,
     loader:()=>fetch('details.json'),
     errorElement: <ErrorPage></ErrorPage>,
    },
  
 
]);