import { SalesApi } from "@/api/endpoints/Sales";
import { useFetch } from "@/api/methods";

const useFetchHomeSales = () => {
  return useFetch({ apiEndPoint: SalesApi.getHomeSales });
};

const useFetchSales = () => {
  return useFetch({ apiEndPoint: SalesApi.get });
};

export { useFetchHomeSales, useFetchSales };
