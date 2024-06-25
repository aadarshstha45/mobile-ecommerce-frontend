import { Flex, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { appRoutes } from "./router/appRoutes";
import { authRoutes } from "./router/authRoutes";

const App = () => {
  const isAuthenticated = sessionStorage.getItem("access_token") ? true : false;
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
          {authRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {/* App Routes */}

          <Route path="/" element={<Outlet />}>
            {appRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((childRoute, childIndex) => (
                    <Route
                      key={childIndex}
                      index={childRoute.index} // Use `index` prop for index route
                      path={childRoute.path}
                      element={childRoute.element}
                    />
                  ))}
              </Route>
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
