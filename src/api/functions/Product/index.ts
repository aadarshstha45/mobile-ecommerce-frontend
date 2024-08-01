import { HttpClient } from "@/api/axiosSetup";
import { ProductApi } from "@/api/endpoints/Product";
import { useFetch, useMutate } from "@/api/methods";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchAllProducts = ({ sort, page }: { sort: string; page: number }) => {
  return HttpClient.get(ProductApi.getProducts({ sort, page }));
};

const useFetchAllProducts = (sort: string) => {
  return useInfiniteQuery({
    queryKey: ["products", { sort }],
    queryFn: async ({ pageParam = 1 }: { pageParam: number }) => {
      const data = await fetchAllProducts({ page: pageParam, sort: sort });
      return data.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage?.data?.length === 0 ? undefined : pages.length + 1,
  });
};

const useFetchProductById = (id: string) => {
  return useFetch({ apiEndPoint: ProductApi.getProductById(id) });
};

const useFetchRelatedProducts = (id: string) => {
  return useFetch({ apiEndPoint: ProductApi.getRelatedProducts(id) });
};

const useAddViewAction = () => {
  return useMutate({ apiEndPoint: ProductApi.addViewAction });
};

export {
  useAddViewAction,
  useFetchAllProducts,
  useFetchProductById,
  useFetchRelatedProducts,
};
