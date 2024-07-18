import { QueryApi } from "@/api/endpoints/Query";
import { useMutate } from "@/api/methods";
import { usePaginatedFetch } from "@/api/methods/get";

const useSendProductQuery = (id: string) => {
  return useMutate({
    apiEndPoint: QueryApi.create,
    inValidateEndpoint: QueryApi.get(id, 3),
    message: "Query sent successfully",
  });
};

const useFetchProductQuery = (id: string, perPage: number) => {
  return usePaginatedFetch(QueryApi.get(id, perPage));
};

export { useFetchProductQuery, useSendProductQuery };
