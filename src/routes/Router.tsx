
import React from 'react'
import { useRoutes } from "react-router-dom"
import HomeLayout from '../layouts/home/HomeLayout'
import HomePage from '../pages/home/HomePage'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'

export default function Router() {
    const routing = useRoutes([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/register",
                    element: <Register />
                }
            ]
        }
    ])
    return routing
}
