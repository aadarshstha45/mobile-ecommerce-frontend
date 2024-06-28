/* eslint-disable react-refresh/only-export-components */
import LayoutWrapper from "@/layouts";
import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
// const About = lazy(() => import("@/pages/About"));
const Category = lazy(() => import("@/pages/Category"));
const SpecialOffer = lazy(() => import("@/pages/SpecialOffer"));
const Checkout = lazy(() => import("@/pages/Checkout"));
const Profile = lazy(() => import("@/pages/Profile"));
const ProfileDetails = lazy(
  () => import("@/pages/Profile/pages/ProfileDetails")
);
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const SavedAddress = lazy(() => import("@/pages/Profile/pages/SavedAddress"));
const AccountSettings = lazy(
  () => import("@/pages/Profile/pages/AccountSettings")
);
const MyPurchase = lazy(() => import("@/pages/Profile/pages/MyPurchase"));

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
        path: "category/:id",
        element: <Category />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "special-offer",
        element: <SpecialOffer />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "profile",
        element: <Profile />,
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
            path: "purchases",
            element: <MyPurchase />,
          },
          {
            path: "account-settings",
            element: <AccountSettings />,
          },
        ],
      },
    ],
  },
];
