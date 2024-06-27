import { Container, Flex } from "@chakra-ui/react";
import { Outlet, useOutletContext } from "react-router-dom";
import Sidebar from "./Sidebar";

const Profile = () => {
  const data = useOutletContext();
  return (
    <Flex
      py={10}
      as={Container}
      id={"profile"}
      maxW={{ base: "99vw", sm: "95vw", md: "90vw" }}
      minH={window.innerHeight}
      overflow={"auto"}
      gap={4}
    >
      <Sidebar data={data} />
      <Outlet context={(data && data) || []} />
    </Flex>
  );
};

export default Profile;
