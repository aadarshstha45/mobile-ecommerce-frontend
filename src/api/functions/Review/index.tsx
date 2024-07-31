import { ReviewAPI } from "@/api/endpoints/Review";
import { useFetch, useMutate } from "@/api/methods";

const useAddReview = () => {
  return useMutate({
    apiEndPoint: ReviewAPI.add,
    inValidateEndpoint: ReviewAPI.getTo,
    message: "Review added successfully",
  });
};

const useFetchToBeReviewed = () => {
  return useFetch({
    apiEndPoint: ReviewAPI.getTo,
  });
};

const useFetchReviewed = () => {
  return useFetch({
    apiEndPoint: ReviewAPI.getReviewed,
  });
};

export { useAddReview, useFetchReviewed, useFetchToBeReviewed };
