import { Flex, Spinner } from "@chakra-ui/react";
import { Suspense, useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { getAppRoutes } from "./router/appRoutes";
import { authRoutes } from "./router/authRoutes";

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
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("access_token")
      ? true
      : false;
    console.log(isAuthenticated);
  }, [sessionStorage.getItem("access_token")]);
  const appRoutes = getAppRoutes();
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
            {authRoutes.map((route, index) => (
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
