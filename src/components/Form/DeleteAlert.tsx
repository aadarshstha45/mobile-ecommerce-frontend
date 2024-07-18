/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

interface DeleteAlertProps {
  heading?: string;
  message?: string;
  isOpen: boolean;
  onClose: () => void;
  cancelRef?: any;
  onDelete: () => void;
  isDeleting?: boolean;
}

const DeleteAlert = ({
  isOpen,
  onClose,
  cancelRef,
  heading,
  message,
  onDelete,
  isDeleting,
}: DeleteAlertProps) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {heading}
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{message}</AlertDialogBody>

          <AlertDialogFooter gap={2}>
            <Button
              size={"sm"}
              variant={"outline"}
              colorScheme="gray"
              ref={cancelRef}
              borderRadius={4}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              size={"sm"}
              borderRadius={4}
              isLoading={isDeleting}
              colorScheme="red"
              onClick={onDelete}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DeleteAlert;
