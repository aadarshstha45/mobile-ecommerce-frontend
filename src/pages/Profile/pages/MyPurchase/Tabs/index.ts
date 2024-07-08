import { lazy } from "react";

const Delivered = lazy(() => import("./Delivered"));
const InProcess = lazy(() => import("./InProcess"));

export { Delivered, InProcess };
