/* eslint-disable react-refresh/only-export-components */

import { lazy } from "react";

const LoginPage = lazy(() => import("../pages/Auth/Login"));
const RegisterPage = lazy(() => import("../pages/Auth/Register"));
const ResetPassword = lazy(() => import("../pages/Auth/ResetPassword"));
const SetPassword = lazy(() => import("../pages/Auth/SetPassword"));
const VerifyOTP = lazy(() => import("../pages/Auth/VerifyOTP"));

export const authRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
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
