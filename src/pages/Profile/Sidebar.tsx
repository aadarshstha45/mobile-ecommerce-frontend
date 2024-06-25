import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

const sidebarLinks = [
  {
    id: 1,
    label: "Profile Details",
    to: "",
  },
  {
    id: 2,
    label: "Saved Address",
    to: "saved-address",
  },
  {
    id: 3,
    label: "My Purchases",
    to: "purchases",
  },
  {
    id: 4,
    label: "My Orders",
    to: "orders",
  },
];

interface SidebarProps {
  data: any;
}

const Sidebar = ({ data }: SidebarProps) => {
  const path = useLocation().pathname.split("/")[2];
  return (
    <Flex flexDir={"column"} minH={window.innerHeight} w={"200px"} gap={10}>
      <Text fontWeight={500} fontSize={{ base: "12px", md: "24px" }}>
        Hi, {data?.name?.split(" ")[0]}
      </Text>
      <Stack spacing={4}>
        {sidebarLinks.map((link) => (
          <Link
            key={link.id}
            w={"fit-content"}
            as={NavLink}
            borderRadius={5}
            _activeLink={
              path === link.to // Use location.pathname to check the current path
                ? {
                    bg: "primary.400",
                    color: "white",
                  }
                : {
                    bg: "none",
                  }
            }
            p={2}
            to={`/profile/${link.to}`}
          >
            {link.label}
          </Link>
        ))}
      </Stack>
    </Flex>
  );
};

export default Sidebar;
