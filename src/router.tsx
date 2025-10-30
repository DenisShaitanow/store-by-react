import { createBrowserRouter } from "react-router-dom";
import { HomePage } from './pages/home';  
import Layout from "./pages/layout/layout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          /*{
            path: "about",
            element: <AboutPage />,
          },*/
        ],
      },
]);