import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SkinsPage from "./pages/SkinsPage";
import LoginPage from "./pages/LoginPage";
import AddSkinPage from "./pages/AddSkinPage";
import EditSkinPage from "./pages/EditSkinPage";
import ErrorPage from "./pages/ErrorPage";
import DetailsPage from "./pages/DetailsPage";
import CartPage from "./pages/CartPage";

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {
            link: "/",
            element: <HomePage />,
            id: 1
        },
        {
            link: "/skins",
            element: <SkinsPage />,
            id: 2
        },
        {
            link: "/authentication",
            element: <LoginPage />,
            id: 3
        },
        {
            link: "/add",
            element: <AddSkinPage />,
            id: 4
        },
        {
            link: "/edit/:id",
            element: <EditSkinPage />,
            id: 5
        },
        {
            link: "/*",
            element: <ErrorPage />,
            id: 6
        },
        {
            link: "/details/:id",
            element: <DetailsPage />,
            id: 7
        },
        {
            link: "/cart",
            element: <CartPage />,
            id: 8
        }
    ];

    return (
        <Routes>
            {PUBLIC_ROUTES.map((item) => (
                <Route path={item.link} element={item.element} key={item.id} />
            ))}
        </Routes>
    )
};

export default MainRoutes;

