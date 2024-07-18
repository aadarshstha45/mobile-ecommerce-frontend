import { SalesApi } from "@/api/endpoints/Sales";
import { useFetch } from "@/api/methods";

export const useFetchHomeSales = () => {
  return useFetch(SalesApi.getHomeSales);
};
