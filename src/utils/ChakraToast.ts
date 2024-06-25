// toast.ts
import { useToast } from "@chakra-ui/react";

export const useChakraToast = () => {
  const toast = useToast();

  const showError = (message: string) => {
    toast({
      title: message,
      status: "error",
      duration: 4000,
      isClosable: true,
      position: "top-right",
    });
  };

  const showSuccess = (message: string) => {
    toast({
      title: message,
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top-right",
    });
  };

  return { showError, showSuccess };
};
