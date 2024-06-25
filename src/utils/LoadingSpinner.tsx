import { Spinner } from "@chakra-ui/react";

export const LoadingSpinner = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="transparent"
      color="blue.500"
      size="xl"
    />
  );
};
