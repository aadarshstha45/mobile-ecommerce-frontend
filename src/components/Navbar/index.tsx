import { useLogout } from "@/api/auth";
import { BaseURL } from "@/api/axiosSetup";
import { useFetchCategoryMenu } from "@/api/functions/Category";
import NavCart from "@/assets/icons/NavCart";
import SearchIcon from "@/assets/icons/SearchIcon";
import ShoppingCart from "@/assets/icons/ShoppingCart";
import Profile from "@/assets/images/man2.png";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Link,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import { Menu as MenuIcon } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import CartDrawer from "../CartDrawer";

function NavBar({ data }: any) {
  const path = useLocation().pathname.split("/")[1];
  const { data: categoryMenu } = useFetchCategoryMenu();
  const navigate = useNavigate();
  const isAuthenticated = sessionStorage.getItem("access_token") ? true : false;
  const { mutateAsync } = useLogout();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSignOut = async () => {
    console.log("signing out");
    await mutateAsync();
    navigate("/");
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
            {categoryMenu?.map((category: any) => (
              <Link
                _hover={{ textDecor: "none" }}
                as={NavLink}
                to={`/category/${category.id}`}
                key={category.id}
                _activeLink={{ color: "primary.500", fontWeight: 600 }}
                fontSize={{
                  base: "14px",
                  sm: "16px",
                  md: "18px",
                  lg: "20px",
                }}
              >
                {category.name}
              </Link>
            ))}
          </HStack>
          <Box display={{ base: "block", md: "none" }}>
            <MenuIcon size={24} />
          </Box>
          <Link as={NavLink} to="/" fontSize={{ base: "14px", sm: "16px" }}>
            <NavCart boxSize={{ base: 6, md: 8 }} />
          </Link>

          <HStack gap={"30px"}>
            <SearchIcon boxSize={{ base: 5, md: 6 }} />
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
              <Popover isLazy closeOnBlur closeOnEsc placement="bottom-end">
                <PopoverTrigger>
                  <Avatar
                    cursor={"pointer"}
                    src={data?.image ? `${BaseURL}/${data?.image}` : Profile}
                    size={{ base: "sm", md: "md" }}
                  />
                </PopoverTrigger>
                <PopoverContent
                  borderColor={"primary.500"}
                  w={"fit-content"}
                  overflow={"hidden"}
                >
                  <PopoverArrow />
                  <Link
                    as={NavLink}
                    _hover={{ textDecor: "none" }}
                    to="/profile/"
                  >
                    <PopoverHeader
                      _hover={{ bg: "primary.500", color: "white" }}
                    >
                      {data?.name}
                    </PopoverHeader>
                  </Link>
                  <PopoverHeader
                    _hover={{ bg: "primary.500", color: "white" }}
                    cursor={"pointer"}
                    onClick={handleSignOut}
                  >
                    Logout
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
            )}

            <ShoppingCart
              onClick={onOpen}
              cursor={"pointer"}
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
