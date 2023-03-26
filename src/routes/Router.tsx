import Login from "../pages/login/Login";
import React from "react";
import { useRoutes } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
import HomeLayout from "../layouts/home/HomeLayout";
import AddLearningManagement from "../pages/addLearningManagement/AddLearningManagement";
import HomePage from "../pages/home/HomePage";
import LearningManagement from "../pages/learningManagement/LearningManagement";
import UserManagement from "../pages/userManagement/UserManagement";
import AdminGuard from "../guards/AdminGuard";
import CourseDetail from "../pages/course_detail/CourseDetail";
import Profile from "../pages/profile/Profile";
import Course from "../pages/course/Course";
import CourseCatalog from "../pages/courseCatalog/CourseCatalog"
import NoAuthGuard from "../guards/NoAuthGuard";
import AuthGuard from "../guards/AuthGuard";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/",
          element: <NoAuthGuard />,
          children: [
            {
              path: "/login",
              element: <Login />,
            },
          ]
        },
        {
          path: "/",
          element: <AuthGuard />,
          children: [
            {
              path: "/course-detail/:course",
              element: <CourseDetail />,
            },
          ]
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/course",
          element: <Course />
        },
        {
          path: "courseCatalog/:course",
          element: <CourseCatalog />
        },
      ],
    },

    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <AdminGuard />,
          children: [
            {
              path: "/admin/learning-management",
              element: <LearningManagement />,
            },
            {
              path: "/admin/user-management",
              element: <UserManagement />,
            },
            {
              path: "/admin/learning-management/add-learning",
              element: <AddLearningManagement />,
            },
          ],
        },
      ],
    },
  ]);

  return routing;
}