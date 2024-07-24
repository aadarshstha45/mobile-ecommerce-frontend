import { ProductApi } from "@/api/endpoints/Product";
import { useFetch } from "@/api/methods";

const useFetchProductById = (id: string) => {
  return useFetch({ apiEndPoint: ProductApi.getProductById(id) });
};

const useFetchRelatedProducts = (id: string) => {
  return useFetch({ apiEndPoint: ProductApi.getRelatedProducts(id) });
};

export { useFetchProductById, useFetchRelatedProducts };
