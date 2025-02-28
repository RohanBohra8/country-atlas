import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import {Country} from "./pages/Country"

import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/country",
    element: <Country />
  },
  {
    path: "/Contact",
    element: <Contact />
  }
]);


export const App = () => {


  
  return <RouterProvider router={router}/>
}

