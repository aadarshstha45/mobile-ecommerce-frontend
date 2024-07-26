import { Link as ChakraLink, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    label: "info@furnio.com",
    to: "mailto:info@furnio.com",
  },
  {
    id: 2,
    label: "+977 9876543210",
    to: "tel:+977 9876543210",
  },
  {
    id: 3,
    label: "012278889",
    to: "tel:012278889",
  },
];

function CustomerSection({ data }: any) {
  return (
    <Flex flexDir={"column"} gap={4}>
      <Text
        fontWeight={700}
        fontSize={{ base: "14px", sm: "16px", md: "20px" }}
      >
        Customer Service
      </Text>
      {data && (
        <>
          <ChakraLink
            as={Link}
            to={`mailto:${data.email}`}
            fontSize={{ base: "12px", md: "16px" }}
            textColor={"#000"}
          >
            {data.email}
          </ChakraLink>
          <ChakraLink
            as={Link}
            to={`mailto:${data.email}`}
            fontSize={{ base: "12px", md: "16px" }}
            textColor={"#000"}
          >
            {data.email}
          </ChakraLink>
        </>
      )}
      {links.map((link) => (
        <ChakraLink
          key={link.id}
          as={Link}
          to={link.to}
          fontSize={{ base: "12px", md: "16px" }}
          textColor={"#000"}
        >
          {link.label}
        </ChakraLink>
      ))}
    </Flex>
  );
}

export default CustomerSection;
