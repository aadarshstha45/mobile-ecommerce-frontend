import { useFetchUser } from "@/api/auth";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import TokenService from "@/services/service-token";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function LayoutWrapper() {
  const isAuthenticated = TokenService.isAuthenticated();
  const { data: user } = useFetchUser({ enabled: isAuthenticated });
  return (
    <Flex flexDir={"column"} overflow={"hidden"}>
      <NavBar data={user && user} />
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
        <Box mt={{ base: "80px", md: "100px" }}>
          <Outlet context={(user && user) || []} />
        </Box>
      </Suspense>
      <Footer />
    </Flex>
  );
}

export default LayoutWrapper;
