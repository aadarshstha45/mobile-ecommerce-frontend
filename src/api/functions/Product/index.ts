import { ProductApi } from "@/api/endpoints/Product";
import { useFetch } from "@/api/methods";

const useFetchProductById = (id: string) => {
  return useFetch(ProductApi.getProductById(id));
};

export { useFetchProductById };
