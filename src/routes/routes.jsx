import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Services from "../pages/Services";
import Contact from "../pages/Contact";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path: "app",
            element: <App></App>
        },
        {
          path:"services",
          element: <Services></Services>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        }
      ]
    },
  ]);