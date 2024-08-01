import { useAddReview } from "@/api/functions/Review";
import { TextInput } from "@/components/Form";
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
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface ReviewFormProps {
  onClose: () => void;
  isOpen: boolean;
  productId: number | null;
}

const ReviewForm = ({ onClose, isOpen, productId }: ReviewFormProps) => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      product_id: productId,
      rating: 4,
      review: "Hello",
    },
  });

  useEffect(() => {
    if (productId !== null) {
      setValue("product_id", productId);
    }
  }, [productId, setValue]);
  const { mutateAsync, isPending } = useAddReview();

  const onSubmit = async (data: any) => {
    await mutateAsync(data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInTop">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Add Review</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)} id="review-form">
            <TextInput control={control} name="rating" label="Rating" />
            <TextInput
              type="textarea"
              control={control}
              name="review"
              label="Review"
            />
          </form>
        </ModalBody>
        <ModalFooter gap={1}>
          <Button
            size={"sm"}
            colorScheme="gray"
            variant={"outline"}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            size={"sm"}
            form="review-form"
            type="submit"
            isLoading={isPending}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReviewForm;
