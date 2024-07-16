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

const Checkout = lazy(() => import("@/pages/Checkout"));
const Profile = lazy(() => import("@/pages/Profile"));
const Cart = lazy(() => import("@/pages/Cart"));

export const authenticatedRoutes = [
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
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
            path: "my-carts",
            element: <Cart />,
          },
        ],
      },
    ],
  },
];
