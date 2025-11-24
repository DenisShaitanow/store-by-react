import { createBrowserRouter } from "react-router-dom";
import { HomePage } from './pages/home';  
import Layout from "./pages/layout/layout";
import { AboutPage } from "./pages/about_project";
import { CardPage } from './pages/cardPage';
import RegistrationPage from './pages/registration/registration';
import  AuthPage from './pages/authPage/AuthPage';
import FavoritsPage from './pages/favorits/FavoritsPage';
import BasketPage from './pages/basket/BasketPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "about",
            element: <AboutPage />,
          },
          {
            path: '/:idCard',
            element: <CardPage />
          },
          {
            path: '/registration',
            element: <RegistrationPage />
          },
          {
            path: '/loginClient',
            element: <AuthPage />
          },
          {
            path: '/favoritsProducts',
            element: <FavoritsPage />
          },
          {
            path: '/basket',
            element: <BasketPage />
          }
        ],
      },
]);