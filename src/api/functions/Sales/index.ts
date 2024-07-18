import { SalesApi } from "@/api/endpoints/Sales";
import { useFetch } from "@/api/methods";

const useFetchHomeSales = () => {
  return useFetch(SalesApi.getHomeSales);
};

const useFetchSales = () => {
  return useFetch(SalesApi.get);
};

export { useFetchHomeSales, useFetchSales };
