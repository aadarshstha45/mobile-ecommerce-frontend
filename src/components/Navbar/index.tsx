import { useLogout } from "@/api/auth";
import { BaseURL } from "@/api/axiosSetup";
import { useFetchMenuItems } from "@/api/functions/Category";
import NavCart from "@/assets/icons/NavCart";
import SearchIcon from "@/assets/icons/SearchIcon";
import ShoppingCart from "@/assets/icons/ShoppingCart";
import NoImage from "@/assets/icons/UserIcon/user.png";
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
import { Menu as MenuIcon } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import CartDrawer from "../CartDrawer";
import MobileNav from "./MobileNav";

function NavBar({ data }: any) {
  const path = useLocation().pathname.split("/")[1];
  const { data: menus } = useFetchMenuItems();

  const {
    isOpen: isMobileNavOpen,
    onOpen: onMobileNavOpen,
    onClose: onMobileNavClose,
  } = useDisclosure();

  const navigate = useNavigate();
  const isAuthenticated = sessionStorage.getItem("access_token") ? true : false;
  const { mutateAsync } = useLogout();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSignOut = async () => {
    console.log("signing out");
    await mutateAsync();
    navigate("/");
  };

  const handleCartOpen = () => {
    isAuthenticated ? onOpen() : navigate("/login");
  };

  return (
    <Flex
      bg={path ? "white" : "#BEBDBD"}
      borderBottom={"1px solid #BEBDBD"}
      as={"nav"}
      w="100%"
      p={{ base: 4, sm: 6 }}
    >
      <Container maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}>
        <Flex align={"center"} justify={"space-between"}>
          <HStack display={{ base: "none", md: "flex" }} gap={"30px"}>
            {menus?.map((menu: any) => {
              return (
                <Link
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
          <MobileNav isOpen={isMobileNavOpen} onClose={onMobileNavClose} />
          <Icon
            onClick={onMobileNavOpen}
            display={{ base: "block", md: "none" }}
            cursor={"pointer"}
            boxSize={6}
            as={MenuIcon}
          />
          <Link as={NavLink} to="/" fontSize={{ base: "14px", sm: "16px" }}>
            <NavCart boxSize={{ base: 6, md: 8 }} />
          </Link>

          <HStack gap={"30px"}>
            <SearchIcon
              display={{ base: "none", md: "flex" }}
              boxSize={{ base: 5, md: 6 }}
            />
            {!isAuthenticated ? (
              <ButtonGroup display={{ base: "none", md: "flex" }}>
                <Button
                  display={{ base: "none", md: "flex" }}
                  as={NavLink}
                  to="/login"
                  px={6}
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
                  px={6}
                  colorScheme="primary"
                >
                  Sign Up
                </Button>
              </ButtonGroup>
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
                    cursor={"pointer"}
                    src={data?.image ? `${BaseURL}/${data?.image}` : NoImage}
                    size={{ base: "sm", md: "md" }}
                    loading="lazy"
                  />
                </MenuButton>
                <MenuList
                  zIndex={9999}
                  minW={"fit-content"}
                  borderColor={"primary.500"}
                  py={0}
                  overflow={"hidden"}
                >
                  <Link
                    as={NavLink}
                    _hover={{ textDecor: "none" }}
                    to="/profile/"
                  >
                    <MenuItem
                      borderBottom={"1px solid"}
                      borderColor={"primary.500"}
                      _hover={{ bg: "primary.500", color: "white" }}
                    >
                      {data?.name}
                    </MenuItem>
                  </Link>
                  <MenuItem
                    display={{ base: "block", md: "none" }}
                    borderBottom={"1px solid"}
                    borderColor={"primary.500"}
                    _hover={{ bg: "primary.500", color: "white" }}
                    cursor={"pointer"}
                    onClick={() => navigate("/profile/my-carts")}
                  >
                    My Carts
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: "primary.500", color: "white" }}
                    cursor={"pointer"}
                    onClick={handleSignOut}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
            <ShoppingCart
              onClick={handleCartOpen}
              cursor={"pointer"}
              display={{ base: "none", md: "block" }}
              boxSize={{ base: 5, sm: 6 }}
            />
          </HStack>
        </Flex>
        <CartDrawer isOpen={isOpen} onClose={onClose} />
      </Container>
    </Flex>
  );
}

export default NavBar;
