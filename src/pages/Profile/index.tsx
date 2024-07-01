import { Container, Flex } from "@chakra-ui/react";
import { Outlet, useOutletContext } from "react-router-dom";
import Sidebar from "./Sidebar";

const Profile = () => {
  const data = useOutletContext();
  return (
    <Flex
      py={10}
      id={"profile"}
      minH={window.innerHeight}
      overflow={"auto"}
      gap={6}
    >
      <Sidebar data={data} />
      <Container maxW={{ base: "97vw", md: "90vw", lg: "80vw" }} id={"profile"}>
        <Outlet context={(data && data) || []} />
      </Container>
    </Flex>
  );
};

export default Profile;
