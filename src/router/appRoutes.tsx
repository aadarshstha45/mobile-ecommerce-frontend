/* eslint-disable react-refresh/only-export-components */
import LayoutWrapper from "@/layouts";
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
const SpecialOffer = lazy(() => import("@/pages/SpecialOffer"));
const Checkout = lazy(() => import("@/pages/Checkout"));
const Profile = lazy(() => import("@/pages/Profile"));
const Cart = lazy(() => import("@/pages/Cart"));

const ProductDetail = lazy(() => import("@/pages/ProductDetail"));

const isAuthenticated = sessionStorage.getItem("access_token") ? true : false;

export const appRoutes = [
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
        path: "special-offer",
        element: <SpecialOffer />,
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
            path: "my-carts",
            element: <Cart />,
          },
          {
            path: "wishlist",
            element: <WishList />,
          },
          {
            path: "*",
            element: <Navigate to="/profile/" />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
