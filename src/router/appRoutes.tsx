/* eslint-disable react-refresh/only-export-components */
import LayoutWrapper from "@/layouts";
import { lazy } from "react";

import ProductDetail from "../pages/ProductDetail";

const Home = lazy(() => import("@/pages/Home"));
// const About = lazy(() => import("@/pages/About"));
const Collection = lazy(() => import("@/pages/Collection"));
const SpecialOffer = lazy(() => import("@/pages/SpecialOffer"));
const Checkout = lazy(() => import("@/pages/Checkout"));
const Profile = lazy(() => import("@/pages/Profile"));

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
        path: "collection/:slug",
        element: <Collection />,
      },
      {
        path: "product",
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
      },
    ],
  },
];
