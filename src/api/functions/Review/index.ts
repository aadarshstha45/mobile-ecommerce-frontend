import { ReviewAPI } from "@/api/endpoints/Review";
import { useFetch, useMutate } from "@/api/methods";
import { usePaginatedFetch } from "@/api/methods/get";

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

const useFetchRatings = (id: number) => {
  return usePaginatedFetch(ReviewAPI.getRatings(id));
};

export {
  useAddReview,
  useFetchRatings,
  useFetchReviewed,
  useFetchToBeReviewed,
};
