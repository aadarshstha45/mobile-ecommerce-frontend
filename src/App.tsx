import { Flex, Spinner } from "@chakra-ui/react";
import { Suspense, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useAuthentication, useLogoutUser } from "./api/auth/users";
import { getAppRoutes } from "./router/appRoutes";
import { LoadingSpinner } from "./utils/LoadingSpinner";
const renderRoutes = (routes: any) => {
  return routes.map((route: any, index: number) => (
    <Route
      key={index}
      path={route.path}
      element={route.element}
      index={route.index}
    >
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

const App = () => {
  const { data: isAuthenticated, isLoading: isAuthLoading } =
    useAuthentication();
  const { mutateAsync: logoutUser } = useLogoutUser();
  useEffect(() => {
    if (typeof isAuthenticated === "boolean" && !isAuthenticated) {
      localStorage.getItem("token") ? logoutUser() : null;
    }
  }, [isAuthenticated]);
  if (isAuthLoading) {
    return (
      <Flex justifyContent={"center"} alignItems="center" height={"100vh"}>
        <LoadingSpinner />
      </Flex>
    );
  }
  const appRoutes = getAppRoutes(isAuthenticated!);
  return (
    <Suspense
      fallback={
        <Flex justifyContent={"center"} alignItems="center" height={"100vh"}>
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="primary.500"
            size="xl"
          />
        </Flex>
      }
    >
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}

          {/* App Routes */}
          <Route path="/" element={<Outlet />}>
            {appRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            {renderRoutes(appRoutes)}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
