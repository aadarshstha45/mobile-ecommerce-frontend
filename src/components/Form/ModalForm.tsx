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
  form?: string;
  height?: string;
  isHidden?: boolean;
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
  form,
  height,
  isHidden,
}: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        pos={"fixed"}
        maxW={["90%", "80%", "60%", "40%"]}
        maxH={height ?? window.innerHeight - 100}
      >
        <ModalHeader borderBottom={"1px solid #939292"} fontWeight={500}>
          {heading}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          minH={height ?? window.innerHeight - 250}
          overflow={"auto"}
          pt={4}
        >
          <form id={form} onSubmit={onSubmit}>
            {children}
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            colorScheme="primary"
            border={"1px solid #000"}
            borderRadius={3}
            size={"sm"}
            mr={3}
            display={isHidden ? "none" : "flex"}
            isDisabled={isDisabled}
            isLoading={isLoading}
            form={form}
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
