import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { Flex, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function AuthWrapper() {
  return (
    <Flex flexDir={"column"} overflow={"hidden"}>
      <NavBar />
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
        <Outlet />
      </Suspense>
      <Footer />
    </Flex>
  );
}

export default AuthWrapper;
