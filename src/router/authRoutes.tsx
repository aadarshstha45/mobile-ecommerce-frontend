/* eslint-disable react-refresh/only-export-components */

import { lazy } from "react";
import { Navigate } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/Auth/Login"));
const RegisterPage = lazy(() => import("../pages/Auth/Register"));
const ResetPassword = lazy(() => import("../pages/Auth/ResetPassword"));
const SetPassword = lazy(() => import("../pages/Auth/SetPassword"));
const VerifyOTP = lazy(() => import("../pages/Auth/VerifyOTP"));

const isAuthenticated = sessionStorage.getItem("access_token") ? true : false;

export const authRoutes = [
  {
    path: "/login",
    element: isAuthenticated ? <Navigate to={"/"} /> : <LoginPage />,
  },
  {
    path: "/register",
    element: isAuthenticated ? <Navigate to={"/"} /> : <RegisterPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/set-password",
    element: <SetPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOTP />,
  },
];
