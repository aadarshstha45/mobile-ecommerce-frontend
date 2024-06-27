import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading?: string;
  onSubmit: () => void;
  children: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  buttonText?: string;
}

export const ModalForm = ({
  isOpen,
  onClose,
  heading,
  onSubmit,
  children,
  isDisabled,
  isLoading,
  buttonText,
}: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        pos={"fixed"}
        maxW={["90%", "80%", "60%", "40%"]}
        maxH={window.innerHeight - 100}
        onSubmit={onSubmit}
        as={"form"}
        noValidate
      >
        <ModalHeader borderBottom={"1px solid"} fontWeight={500}>
          {heading}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody minH={window.innerHeight - 250} overflow={"auto"} pt={4}>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            colorScheme="primary"
            border={"1px solid #000"}
            borderRadius={3}
            size={"sm"}
            mr={3}
            isDisabled={isDisabled}
            isLoading={isLoading}
          >
            {buttonText || "Save"}
          </Button>
          <Button
            colorScheme="primary"
            border={"1px solid #000"}
            borderRadius={3}
            variant={"outline"}
            size={"sm"}
            mr={3}
            onClick={onClose}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
