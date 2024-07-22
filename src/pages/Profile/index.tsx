import {
  Button,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useLocation, useOutletContext } from "react-router-dom";
import Sidebar, { sidebarLinks } from "./Sidebar";

const Profile = () => {
  const data = useOutletContext();
  const path = useLocation().pathname;
  const [label, setLabel] = useState<string>("Profile");

  return (
    <Flex
      py={{ base: 4, md: 10 }}
      id={"profile"}
      minH={window.innerHeight}
      overflow={"auto"}
      gap={6}
      maxW={"98vw"}
      justify={"start"}
      flexDir={{ base: "column", md: "row" }}
    >
      <Menu colorScheme="primary">
        <MenuButton
          ml={4}
          as={Button}
          variant={"outline"}
          rightIcon={<ChevronDownIcon />}
          colorScheme="primary"
          borderRadius={2}
          w={"fit-content"}
          justifySelf={"start"}
          display={{ base: "flex", md: "none" }}
        >
          {label}
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            color={"#000"}
            defaultValue={path}
            title="Profile"
            type="radio"
          >
            {sidebarLinks.map((link) => (
              <MenuItemOption
                as={Link}
                to={`${link.to}`}
                key={link.id}
                autoFocus={false}
                value={`/profile/${link.to}`}
                onClick={() => setLabel(link.label)}
              >
                {link.label}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <Sidebar data={data} />
      <Container maxW={{ base: "97vw", md: "90vw", lg: "80vw" }}>
        <Outlet context={(data && data) || []} />
      </Container>
    </Flex>
  );
};

export default Profile;
