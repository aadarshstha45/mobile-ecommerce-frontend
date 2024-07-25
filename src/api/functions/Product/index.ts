import { ProductApi } from "@/api/endpoints/Product";
import { useFetch, useMutate } from "@/api/methods";

const useFetchProductById = (id: string) => {
  return useFetch({ apiEndPoint: ProductApi.getProductById(id) });
};

const useFetchRelatedProducts = (id: string) => {
  return useFetch({ apiEndPoint: ProductApi.getRelatedProducts(id) });
};

const useAddViewAction = () => {
  return useMutate({ apiEndPoint: ProductApi.addViewAction });
};

export { useAddViewAction, useFetchProductById, useFetchRelatedProducts };
