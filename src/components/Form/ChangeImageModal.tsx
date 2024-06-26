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

interface ChangeImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  heading?: string;
  onSubmit: () => void;
  children: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const ChangeImageModal = ({
  isOpen,
  onClose,
  onOpen,
  heading,
  onSubmit,
  children,
  isDisabled,
  isLoading,
}: ChangeImageModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent onSubmit={onSubmit} as={"form"} noValidate>
        <ModalHeader fontWeight={500}>{heading}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
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
            Upload
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
