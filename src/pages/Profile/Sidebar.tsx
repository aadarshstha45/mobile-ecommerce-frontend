import { useFetchAvatars } from "@/api/functions/Avatars";
import { CameraIcon } from "@/assets/icons/CameraIcon";
import AvatarIcon from "@/assets/icons/UserIcon/user.png";
import { ProfileImage } from "@/components/Form/ProfileImage";
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

export const sidebarLinks = [
  {
    id: 1,
    label: "Profile",
    to: "",
  },
  {
    id: 2,
    label: "Saved Address",
    to: "saved-address",
  },
  {
    id: 3,
    label: "My Orders",
    to: "my-orders",
  },
  {
    id: 4,
    label: "My Wishlist",
    to: "wishlist",
  },
  {
    id: 5,
    label: "My Reviews",
    to: "my-reviews",
  },
  {
    id: 6,
    label: "Account Settings",
    to: "account-settings",
  },
];

interface SidebarProps {
  data: any;
}

const Sidebar = ({ data }: SidebarProps) => {
  const path = useLocation().pathname.split("/")[2];
  const { onOpen, isOpen, onClose } = useDisclosure();
  console.log({ data });
  const { data: avatars } = useFetchAvatars();
  console.log({ avatars });

  return (
    <Flex
      flexDir={"column"}
      minH={window.innerHeight}
      w={"250px"}
      gap={10}
      px={8}
      display={{ base: "none", md: "flex" }}
    >
      <Stack spacing={4}>
        <Box pos={"relative"} w={"fit-content"} borderRadius={50}>
          <Avatar
            src={data?.image ? `${data?.image}` : AvatarIcon}
            size={"xl"}
            loading="lazy"
          />
          <IconButton
            colorScheme="primary"
            borderRadius={50}
            aria-label="Change Profile Picture"
            icon={<CameraIcon />}
            pos={"absolute"}
            onClick={onOpen}
            bottom={-2}
            right={-2}
          />
        </Box>
        <Text fontWeight={500} fontSize={{ base: "12px", md: "24px" }}>
          Hi, {data?.name?.split(" ")[0]}
        </Text>
      </Stack>

      <ProfileImage data={data} isOpen={isOpen} onClose={onClose} />

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
