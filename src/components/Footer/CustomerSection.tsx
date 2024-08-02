import { Link as ChakraLink, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
            fontWeight={500}
            textColor={"#000"}
          >
            {data.email}
          </ChakraLink>
          <ChakraLink
            as={Link}
            to={`tel:${data.phone}`}
            fontSize={{ base: "12px", md: "16px" }}
            fontWeight={500}
            textColor={"#000"}
          >
            {data.phone}
          </ChakraLink>
        </>
      )}
    </Flex>
  );
}

export default CustomerSection;
