import { ProductApi } from "@/api/endpoints/Product";
import { useFetch } from "@/api/methods";

const useFetchProductById = (id: string) => {
  return useFetch(ProductApi.getProductById(id));
};

const useFetchRelatedProducts = (id: string) => {
  return useFetch(ProductApi.getRelatedProducts(id));
};

export { useFetchProductById, useFetchRelatedProducts };
