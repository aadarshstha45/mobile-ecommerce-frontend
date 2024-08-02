import { HttpClient } from "@/api/axiosSetup";
import { ProductApi } from "@/api/endpoints/Product";
import { useFetch, useMutate } from "@/api/methods";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchAllProducts = ({
  sort,
  page,
  sizes,
  colors,
}: {
  sort: string;
  page: number;
  sizes: string;
  colors: string;
}) => {
  return HttpClient.get(ProductApi.getProducts({ sort, page, sizes, colors }));
};

const useFetchAllProducts = (sort: string, sizes: string, colors: string) => {
  return useInfiniteQuery({
    queryKey: ["products", { sort, sizes, colors }],
    queryFn: async ({ pageParam = 1 }: { pageParam: number }) => {
      const data = await fetchAllProducts({
        page: pageParam,
        sort,
        sizes,
        colors,
      });
      return data.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage?.data?.length === 0 ? undefined : pages.length + 1,
    refetchOnWindowFocus: false,
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
