import { HeartIcon, PackageCheck, UserIcon } from "lucide-react";

export const profileMenuItems = [
  {
    label: "Manage My Account",
    to: "/profile/",
    icon: UserIcon,
  },
  {
    label: "My Orders",
    to: "/profile/my-orders",
    icon: PackageCheck,
  },
  {
    label: "My WishList",
    to: "/profile/wishlist",
    icon: HeartIcon,
  },
];
