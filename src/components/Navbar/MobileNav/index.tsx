import { isAuthenticated } from "@/api/axiosSetup";
import NoImage from "@/assets/icons/UserIcon/user.png";
import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { BiHome } from "react-icons/bi";
import { Link, useOutletContext } from "react-router-dom";
import { profileMenuItems } from "./profileMenuItems";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const data: any = isAuthenticated ? useOutletContext() : { data: null };
  return (
    <Drawer
      placement="left"
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "full", sm: "sm" }}
    >
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Mobile Nav</DrawerHeader>
        <DrawerBody justifyContent={"center"} alignItems={"center"}>
          <Flex
            flexDir={"column"}
            h={"full"}
            justify={"center"}
            align={"center"}
            gap={4}
          >
            {profileMenuItems.map((item) => (
              <Text
                textAlign={"center"}
                fontSize={{ base: "md", sm: "xl" }}
                key={item.label}
              >
                {item.label}
              </Text>
            ))}
          </Flex>
        </DrawerBody>
        <DrawerFooter
          display={"flex"}
          justifyContent={"space-between"}
          borderTop={"1px solid #939292"}
        >
          <Link to={"/"} onClick={onClose}>
            <Icon as={BiHome} boxSize={6} />
          </Link>
          <Link to={"/profile/"} onClick={onClose}>
            <Avatar
              cursor={"pointer"}
              src={data?.image ? `${data?.image}` : NoImage}
              boxSize={6}
              loading="lazy"
            />
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
