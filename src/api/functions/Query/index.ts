import { QueryApi } from "@/api/endpoints/Query";
import { useFetch, useMutate } from "@/api/methods";

const useFetchProductQuery = () => {
  return useFetch(QueryApi.get);
};

const useSendProductQuery = () => {
  return useMutate({
    apiEndPoint: QueryApi.create,
    inValidateEndpoint: QueryApi.get,
    message: "Query sent successfully",
  });
};

export { useFetchProductQuery, useSendProductQuery };
