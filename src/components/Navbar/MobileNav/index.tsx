import { useLogoutUser } from "@/api/auth/users";
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
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { LogOutIcon } from "lucide-react";
import { BiHome } from "react-icons/bi";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import { profileMenuItems } from "./profileMenuItems";

interface MenuItems {
  id: number;
  slug: string;
  category_id?: number;
  title: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  menus: Array<MenuItems>;
}

const MobileNav = ({ isOpen, onClose, menus }: MobileNavProps) => {
  const data: any = isAuthenticated ? useOutletContext() : { data: null };
  const navigate = useNavigate();
  const { mutateAsync } = useLogoutUser();

  const handleSignOut = async () => {
    await mutateAsync();
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <Drawer
      placement="left"
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "xs" }}
    >
      <DrawerContent maxH={window.innerHeight}>
        <DrawerCloseButton />
        <DrawerHeader borderBottom={"1px solid #939292"}>
          Clothing Store
        </DrawerHeader>
        <DrawerBody justifyContent={"center"} alignItems={"center"}>
          <Flex
            flexDir={"column"}
            h={"full"}
            justify={"center"}
            align={"center"}
            gap={4}
          >
            {menus?.map((menu: any) => {
              return (
                <Link
                  onClick={onClose}
                  _hover={{ textDecor: "none" }}
                  as={NavLink}
                  to={
                    menu.category_slug
                      ? `/${menu.category_slug}/${menu.slug}`
                      : `${menu.slug}`
                  }
                  key={menu.id}
                  _activeLink={{ color: "primary.500", fontWeight: 600 }}
                  fontSize={{
                    base: "18px",
                    sm: "20px",
                    md: "18px",
                    lg: "20px",
                  }}
                >
                  {menu.title}
                </Link>
              );
            })}
          </Flex>
        </DrawerBody>
        <DrawerFooter
          display={"flex"}
          justifyContent={"space-between"}
          borderTop={"1px solid #939292"}
        >
          <Link as={NavLink} to={"/"} onClick={onClose}>
            <Icon as={BiHome} boxSize={6} />
          </Link>
          <Menu
            placement="top-end"
            isLazy
            closeOnBlur
            colorScheme="primary"
            variant={"responsive"}
          >
            <MenuButton>
              <Avatar
                cursor={"pointer"}
                src={data?.image ? `${data?.image}` : NoImage}
                size={"sm"}
                loading="lazy"
              />
            </MenuButton>
            <MenuList
              zIndex={9999}
              minW={"fit-content"}
              maxW={"fit-content"}
              borderColor={"primary.500"}
              overflow={"hidden"}
              p={0}
              px={1}
            >
              <MenuGroup px={0} title="My Account">
                <MenuDivider borderColor={"gray"} />
                {profileMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    as={NavLink}
                    _hover={{ textDecor: "none" }}
                    to={item.to}
                  >
                    <MenuItem
                      borderRadius={5}
                      _hover={{ bg: "primary.500", color: "white" }}
                      icon={<Icon as={item.icon} boxSize={4} />}
                      fontSize={{ base: "12px", md: "14px" }}
                    >
                      {item.label}
                    </MenuItem>
                  </Link>
                ))}
              </MenuGroup>
              <MenuDivider borderColor={"gray"} />
              <MenuItem
                mb={1}
                _hover={{ bg: "primary.500", color: "white" }}
                borderRadius={5}
                icon={
                  <Icon
                    transform={"rotate(180deg)"}
                    as={LogOutIcon}
                    boxSize={4}
                  />
                }
                fontSize={{ base: "12px", md: "14px" }}
                onClick={handleSignOut}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
