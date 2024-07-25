import NavCart from "@/assets/icons/NavCart";
import { Flex, Text } from "@chakra-ui/react";

function AboutSection() {
  return (
    <Flex display={{ base: "none", md: "flex" }} flexDir={"column"} gap={4}>
      <Flex align={"center"} gap={2}>
        <NavCart boxSize={10} />
        <Text fontWeight={700} fontSize={"lg"}>
          Funiro.
        </Text>
      </Flex>
      <Text fontSize={"16px"} color={"gray.500"}>
        400 University Drive Suite 200 Coral Gables, FL 33134 USA
      </Text>
    </Flex>
  );
}

export default AboutSection;
