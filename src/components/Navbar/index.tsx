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
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { Menu as MenuIcon } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { collectionLink } from "./navItems";

function NavBar() {
  const path = useLocation().pathname.split("/")[1];
  console.log(path);
  const isAuthenticated = sessionStorage.getItem("access_token") ? true : false;

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
            {collectionLink.map((collection, i) => (
              <Link
                _hover={{ textDecor: "none" }}
                as={NavLink}
                to={`/collection/${collection.to}`}
                key={i}
                fontSize={{
                  base: "14px",
                  sm: "16px",
                  md: "18px",
                  lg: "20px",
                }}
              >
                {collection.label}
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
              <Popover>
                <PopoverTrigger>
                  <Avatar
                    cursor={"pointer"}
                    src={Profile}
                    size={{ base: "sm", md: "md" }}
                  />
                </PopoverTrigger>
                <PopoverContent w={"100px"} overflow={"hidden"}>
                  <Link
                    as={NavLink}
                    _hover={{ textDecor: "none" }}
                    to="/profile"
                  >
                    <PopoverHeader
                      _hover={{ bg: "primary.500", color: "white" }}
                    >
                      Profile
                    </PopoverHeader>
                  </Link>
                  <PopoverHeader
                    _hover={{ bg: "primary.500", color: "white" }}
                    cursor={"pointer"}
                    // onClick={handleSignOut}
                  >
                    Logout
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
            )}

            <ShoppingCart boxSize={{ base: 5, sm: 6 }} />
          </HStack>
        </Flex>
      </Container>
    </Flex>
  );
}

export default NavBar;
