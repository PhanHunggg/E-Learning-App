import Login from "../pages/login/Login";
import React from "react";
import { useRoutes } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
import HomeLayout from "../layouts/home/HomeLayout";
import AddLearningManagement from "../pages/addLearningManagement/AddLearningManagement";
import HomePage from "../pages/home/HomePage";
import LearningManagement from "../pages/learningManagement/LearningManagement";
import UserManagement from "../pages/userManagement/UserManagement";
import CourseDetail from "../pages/course_detail/CourseDetail";

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
          path: "/login",
          element: <Login />,
        },
        {
          path: "/course-detail/:course",
          element: <CourseDetail />,
        },
      ],
    },

    {
      path: "/admin",
      element: <AdminLayout />,
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
  ]);

  return routing;
}
