import { Flex, Spinner } from "@chakra-ui/react";

interface LoadingSpinnerProps {
  height?: string | number;
}

export const LoadingSpinner = ({ height }: LoadingSpinnerProps) => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems="center"
      height={height ?? window.innerHeight}
      w={"full"}
    >
      <Spinner
        thickness="5px"
        speed="0.65s"
        emptyColor="gray.100"
        color="primary.500"
        size="xl"
      />
    </Flex>
  );
};
