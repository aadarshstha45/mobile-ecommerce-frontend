import { useLogoutUser } from "@/api/auth/users";
import { useFetchMenuItems } from "@/api/functions/Category";
import NavCart from "@/assets/icons/NavCart";
import SearchIcon from "@/assets/icons/SearchIcon";
import ShoppingCart from "@/assets/icons/ShoppingCart";
import NoImage from "@/assets/icons/UserIcon/user.png";
import TokenService from "@/services/service-token";
import {
  Avatar,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { LogOutIcon, Menu as MenuIcon } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import CartDrawer from "../CartDrawer";
import MobileNav from "./MobileNav";
import { profileMenuItems } from "./MobileNav/profileMenuItems";

function NavBar({ data }: any) {
  const isAuthenticated = TokenService.isAuthenticated();
  const path = useLocation().pathname.split("/")[1];
  const { data: menus } = useFetchMenuItems();

  const {
    isOpen: isMobileNavOpen,
    onOpen: onMobileNavOpen,
    onClose: onMobileNavClose,
  } = useDisclosure();

  const navigate = useNavigate();
  const { mutateAsync } = useLogoutUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSignOut = async () => {
    await mutateAsync();
    navigate("/");
    window.location.reload();
  };

  const handleCartOpen = () => {
    TokenService.isAuthenticated() ? onOpen() : navigate("/login");
  };

  return (
    <Flex
      bg={path ? "white" : "#BEBDBD"}
      borderBottom={"1px solid #BEBDBD"}
      as={"nav"}
      w="100%"
      py={5}
      pos={"fixed"}
      h={"75px"}
      zIndex={99}
    >
      <Container maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}>
        <Flex align={"center"} justify={"space-between"}>
          <HStack display={{ base: "none", md: "flex" }} gap={"30px"}>
            {menus?.map((menu: any) => {
              const isActive =
                location.pathname ===
                (menu.category_slug
                  ? `/${menu.category_slug}/${menu.slug}`
                  : `/${menu.slug}`);

              return (
                <Link
                  _hover={{ textDecor: "none", color: "primary.500" }}
                  as={NavLink}
                  to={
                    menu.category_slug
                      ? `/${menu.category_slug}/${menu.slug}`
                      : `${menu.slug}`
                  }
                  key={menu.id}
                  _activeLink={
                    isActive ? { color: "primary.500", fontWeight: 500 } : ""
                  }
                  fontSize={{
                    base: "14px",
                    sm: "16px",
                    md: "18px",
                    lg: "20px",
                  }}
                >
                  {menu.title}
                </Link>
              );
            })}
          </HStack>
          <MobileNav
            isOpen={isMobileNavOpen}
            onClose={onMobileNavClose}
            menus={menus}
          />
          <Icon
            onClick={onMobileNavOpen}
            display={{ base: "block", md: "none" }}
            cursor={"pointer"}
            boxSize={6}
            as={MenuIcon}
          />
          <Link as={NavLink} to="/" fontSize={{ base: "14px", sm: "16px" }}>
            <NavCart boxSize={{ base: 6 }} />
          </Link>

          <HStack gap={"30px"}>
            <SearchIcon
              display={{ base: "none", md: "flex" }}
              boxSize={{ base: 5, md: 6 }}
            />
            {!isAuthenticated ? (
              <>
                <Button
                  display={{ base: "flex", md: "none" }}
                  as={NavLink}
                  to="/login"
                  size={"sm"}
                  borderRadius={0}
                  colorScheme="primary"
                >
                  Login
                </Button>
                <ButtonGroup display={{ base: "none", md: "flex" }}>
                  <Button
                    display={{ base: "none", md: "flex" }}
                    as={NavLink}
                    to="/login"
                    size={"sm"}
                    borderRadius={0}
                    colorScheme="primary"
                  >
                    Login
                  </Button>
                  <Button
                    as={NavLink}
                    to="/register"
                    display={{ base: "none", md: "flex" }}
                    size={"sm"}
                    variant={"outline"}
                    borderRadius={0}
                    colorScheme="primary"
                  >
                    Sign Up
                  </Button>
                </ButtonGroup>
              </>
            ) : (
              <Menu
                isLazy
                closeOnBlur
                colorScheme="primary"
                variant={"responsive"}
                placement="bottom-end"
              >
                <MenuButton>
                  <Avatar
                    display={{ base: "none", md: "flex" }}
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
                  py={0}
                >
                  {profileMenuItems.map((item, index) => (
                    <Link
                      key={index}
                      as={NavLink}
                      _hover={{ textDecor: "none" }}
                      to={item.to}
                    >
                      <MenuItem
                        borderBottom={"1px solid"}
                        borderColor={"primary.500"}
                        _hover={{ bg: "primary.500", color: "white" }}
                        py={2}
                        icon={<Icon as={item.icon} boxSize={4} />}
                        fontSize={{ base: "12px", md: "14px" }}
                      >
                        {item.label}
                      </MenuItem>
                    </Link>
                  ))}
                  <MenuItem
                    borderColor={"primary.500"}
                    _hover={{ bg: "primary.500", color: "white" }}
                    py={2}
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
            )}
            {isAuthenticated && (
              <ShoppingCart
                onClick={handleCartOpen}
                cursor={"pointer"}
                boxSize={{ base: 5, sm: 6 }}
              />
            )}
          </HStack>
        </Flex>
        <CartDrawer isOpen={isOpen} onClose={onClose} />
      </Container>
    </Flex>
  );
}

export default NavBar;
