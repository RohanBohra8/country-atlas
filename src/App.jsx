import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppLayout } from "./components/layout/AppLayout";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";

import "./App.css"; 
import { ErrorPage } from "./components/UI/ErrorPage";
import { CountryDetails } from "./components/layout/CountryDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/country/:id",
        element: <CountryDetails />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
