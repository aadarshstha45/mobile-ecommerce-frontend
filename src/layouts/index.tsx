import { useFetchUser } from "@/api/auth";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { Flex, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function LayoutWrapper() {
  const { data: user } = useFetchUser();
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
        <Outlet context={(user && user) || []} />
      </Suspense>
      <Footer />
    </Flex>
  );
}

export default LayoutWrapper;
