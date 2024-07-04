import { Flex, Spinner } from "@chakra-ui/react";

export const LoadingSpinner = () => {
  return (
    <Flex justifyContent={"center"} alignItems="center" height={"100vh"}>
      <Spinner
        thickness="5px"
        speed="0.65s"
        emptyColor="gray.200"
        color="primary.500"
        size="xl"
      />
    </Flex>
  );
};
