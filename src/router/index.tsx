import { createBrowserRouter } from "react-router-dom";

import { AuthLayout, DashboardLayout, WrapperLayout } from "../layouts";

import {
  Login,
  Register,
  RecoverPassword,
  Stores,
  Users
} from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <WrapperLayout />,
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            path: "/auth/login",
            element: <Login />,
          },
          {
            path: "/auth/register",
            element: <Register />,
          },
          {
            path: "/auth/recover",
            element: <RecoverPassword />,
          },
        ]
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Stores />
          },
          {
            path: "/dashboard/users",
            element: <Users />
          }
        ]
      }
    ]
  },
]);
