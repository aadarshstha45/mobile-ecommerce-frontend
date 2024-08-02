import { useAddReview } from "@/api/functions/Review";
import { TextInput } from "@/components/Form";
import { ReviewSchema } from "@/utils/validation/review";
import { StarIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface ReviewFormProps {
  onClose: () => void;
  isOpen: boolean;
  productId: number | null;
}

const ReviewForm = ({ onClose, isOpen, productId }: ReviewFormProps) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      product_id: productId,
      rating: 0,
      review: "",
    },
    resolver: zodResolver(ReviewSchema),
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

  const handleClose = () => {
    onClose();
    reset();
    setHoveredIndex(-1);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} motionPreset="slideInTop">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Add Review</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)} id="review-form" noValidate>
            <FormControl mb={4}>
              <FormLabel
                mb={2}
                fontSize={{ sm: "14px", md: "16px" }}
                fontWeight={450}
              >
                Rating
              </FormLabel>
              <Controller
                name="rating"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup
                    value={value.toString()}
                    onChange={onChange}
                    onMouseLeave={() => setHoveredIndex(-1)}
                  >
                    <HStack gap={0}>
                      {[...Array(5)].map((_, index) => (
                        <FormLabel
                          htmlFor={`rating_${index}`}
                          key={index}
                          onMouseEnter={() => setHoveredIndex(index + 1)}
                          onClick={() => onChange(index + 1)}
                          cursor="pointer"
                        >
                          <StarIcon
                            w={6}
                            h={6}
                            color={
                              index < (hoveredIndex >= 0 ? hoveredIndex : value)
                                ? "yellow.400"
                                : "gray.300"
                            }
                          />
                          <Radio
                            display="none"
                            id={`rating_${index}`}
                            value={(index + 1).toString()}
                          />
                        </FormLabel>
                      ))}
                    </HStack>
                  </RadioGroup>
                )}
              />
              {errors.rating && (
                <FormHelperText
                  color="red.400"
                  fontSize={{ base: "14px", md: "16px" }}
                  fontStyle={"italic"}
                >
                  {errors.rating.message}
                </FormHelperText>
              )}
            </FormControl>
            <TextInput
              errors={errors}
              type="textarea"
              control={control}
              name="review"
              label="Review"
              isRequired
            />
          </form>
        </ModalBody>
        <ModalFooter gap={1}>
          <Button
            size="sm"
            colorScheme="gray"
            variant="outline"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            size="sm"
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
