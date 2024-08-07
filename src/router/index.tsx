/* eslint-disable react-refresh/only-export-components */
import LayoutWrapper from "@/layouts";
import Esewa from "@/pages/Checkout/Payment/Esewa";
import {
  AccountSettings,
  MyPurchase,
  ProfileDetails,
  SavedAddress,
  WishList,
} from "@/pages/Profile/pages";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
// const About = lazy(() => import("@/pages/About"));
const Category = lazy(() => import("@/pages/Category"));
const Sales = lazy(() => import("@/pages/Sales"));
const NewArrivals = lazy(() => import("@/pages/NewArrivals"));
const Checkout = lazy(() => import("@/pages/Checkout"));
const Profile = lazy(() => import("@/pages/Profile"));

const ProductDetail = lazy(() => import("@/pages/ProductDetail"));

const LoginPage = lazy(() => import("@/pages/Auth/Login"));
const RegisterPage = lazy(() => import("@/pages/Auth/Register"));
const ResetPassword = lazy(() => import("@/pages/Auth/ResetPassword"));
const SetPassword = lazy(() => import("@/pages/Auth/SetPassword"));
const VerifyOTP = lazy(() => import("@/pages/Auth/VerifyOTP"));
const MyReview = lazy(() => import("@/pages/Profile/pages/MyReview"));
const Shop = lazy(() => import("@/pages/Shop"));
const ThankYou = lazy(() => import("@/pages/Checkout/ThankYou"));

export const getAppRoutes = (isAuthenticated: boolean) => {
  return [
    {
      path: "/",
      element: <LayoutWrapper />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <div>About</div>,
        },
        {
          path: ":slug",
          element: <Category />,
        },
        {
          path: ":category_slug/:slug",
          element: <Category />,
        },
        {
          path: "product/:category_slug/:sub_category_slug/:id",
          element: <ProductDetail />,
        },
        {
          path: "/product/:slug/:id",
          element: <ProductDetail />,
        },
        {
          path: "sales-offer",
          element: <Sales />,
        },
        {
          path: "new-arrivals",
          element: <NewArrivals />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "checkout",
          element: isAuthenticated ? (
            <Checkout />
          ) : (
            <Navigate to={`/login?redirect=${window.location.pathname}`} />
          ),
        },
        {
          path: "thank-you",
          element: <ThankYou />,
        },
        {
          path: "profile",
          element: isAuthenticated ? (
            <Profile />
          ) : (
            <Navigate to={`/login?redirect=${window.location.pathname}`} />
          ),
          children: [
            {
              index: true,
              element: <ProfileDetails />,
            },
            {
              path: "saved-address",
              element: <SavedAddress />,
            },
            {
              path: "my-orders",
              element: <MyPurchase />,
            },
            {
              path: "account-settings",
              element: <AccountSettings />,
            },
            {
              path: "wishlist",
              element: <WishList />,
            },
            {
              path: "my-reviews",
              element: <MyReview />,
            },
            {
              path: "*",
              element: <Navigate to="/profile/" />,
            },
          ],
        },
        { path: "checkout/e-sewa", element: <Esewa /> },
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
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];
};
