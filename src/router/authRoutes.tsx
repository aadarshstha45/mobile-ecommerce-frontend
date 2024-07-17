/* eslint-disable react-refresh/only-export-components */

import AuthWrapper from "@/layouts/AuthWrapper";

// const LoginPage = lazy(() => import("../pages/Auth/Login"));
// const RegisterPage = lazy(() => import("../pages/Auth/Register"));
// const ResetPassword = lazy(() => import("../pages/Auth/ResetPassword"));
// const SetPassword = lazy(() => import("../pages/Auth/SetPassword"));
// const VerifyOTP = lazy(() => import("../pages/Auth/VerifyOTP"));

// const isAuthenticated = sessionStorage.getItem("access_token") ? true : false;

export const authRoutes = [
  {
    path: "/auth",
    element: <AuthWrapper />,
    children: [],
  },
];
