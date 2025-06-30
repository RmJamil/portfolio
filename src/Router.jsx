import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "./Home";
import Root from "./Root";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children:[
        {
            index:true,
            path:'/',
            element:<Home></Home>
        }
    ]
  },
]);