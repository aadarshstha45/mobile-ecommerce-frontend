import { Flex, Text } from "@chakra-ui/react";

const MyPurchase = () => {
  return (
    <Flex w={"full"} flexDir={"column"} gap={4}>
      <Text fontSize={"xl"}>My Purchases</Text>
    </Flex>
  );
};

export default MyPurchase;
