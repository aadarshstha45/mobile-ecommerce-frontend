import { Link as ChakraLink, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    label: "Home",
    to: "/",
  },
  {
    id: 2,
    label: "Shop",
    to: "/shop",
  },
  {
    id: 3,
    label: "Special Offer",
    to: "/special-offer",
  },
  {
    id: 4,
    label: "Contact",
    to: "/contact",
  },
];

function LinksSection() {
  return (
    <Flex flexDir={"column"} gap={4}>
      <Text
        fontWeight={700}
        fontSize={{ base: "14px", sm: "16px", md: "20px" }}
      >
        Links
      </Text>

      {links.map((link) => (
        <ChakraLink
          as={Link}
          key={link.id}
          to={link.to}
          fontSize={{ base: "12px", md: "16px" }}
          fontWeight={500}
          textColor={"#000"}
        >
          {link.label}
        </ChakraLink>
      ))}
    </Flex>
  );
}

export default LinksSection;
