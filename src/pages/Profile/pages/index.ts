import { lazy } from "react";

const AccountSettings = lazy(() => import("./AccountSettings"));
const ProfileDetails = lazy(() => import("./ProfileDetails"));
const SavedAddress = lazy(() => import("./SavedAddress"));
const MyPurchase = lazy(() => import("./MyPurchase"));
const WishList = lazy(() => import("./WishList"));

export { AccountSettings, MyPurchase, ProfileDetails, SavedAddress, WishList };
