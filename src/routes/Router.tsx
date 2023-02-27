
import React from 'react'
import { useRoutes } from "react-router-dom"
import HomeLayout from '../layouts/home/HomeLayout'
import HomePage from '../pages/home/HomePage'

export default function Router() {
    const routing = useRoutes([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />
                }
            ]
        }
    ])
    return routing
}
